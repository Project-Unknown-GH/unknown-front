<template>
    <v-layout v-if="loaded">
        <v-container>
            <v-row>
                <v-card>
                    <v-card-text>
                        <p>
                            <span class="display-3 text--primary">
                                {{ userData.username }}
                            </span>
                            <span
                                class="display-2"
                                :style="{
                                    color: roleToColor(userData.role),
                                    fontWeight: 'bold'
                                }"
                            >
                                {{ userData.role.charAt(0).toUpperCase() }}
                            </span>
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="userOpened = !userOpened">
                            {{ userOpened ? "Less info" : "More info" }}
                            <v-icon>{{
                                userOpened
                                    ? "mdi-chevron-up"
                                    : "mdi-chevron-down"
                            }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="userOpened">
                            <v-divider></v-divider>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>Email</v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ userData.email }}
                                    </v-list-item-subtitle>
                                    <v-btn
                                        v-if="userData.role === 'none'"
                                        small
                                        width="10px"
                                        @click="resendVerificationEmail"
                                    >
                                        Resend verification email
                                    </v-btn>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>Role</v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ userData.role }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </div>
                    </v-expand-transition>
                </v-card>
                <v-spacer></v-spacer>
            </v-row>
            <br />
            <v-row>
                <v-expansion-panels v-if="loaded" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Discord Key
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ keyData.discordKey.value }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Rigel Key
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ keyData.rigelKey.value }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            <br />
            <v-row>
                <v-btn :disabled="payable !== true" @click="pay">
                    {{
                        payable === "Sold out"
                            ? "Sold out"
                            : "Pay with credit card"
                    }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!unsubscribable" @click="unsubscribe">
                    Unsubscribe
                </v-btn>
            </v-row>
        </v-container>
        <v-dialog v-model="unverified" persistent width="500">
            <v-card>
                <v-card-title>Email verification</v-card-title>
                <v-card-text>
                    In order to be a part of Project Unknown, your email must be
                    verified. Simply go to your email, find the verification
                    email that was sent by us, and click the link. Doing so will
                    help us prevent spam accounts. Thank you!
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="unverified = false"
                        >Close</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import config from "~/assets/config";

// @ts-ignore
// eslint-disable-next-line no-undef
const stripe = Stripe(`pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T`);

type UserRole = "admin" | "member" | "verified" | "none";
interface UserKey {
    discordKey: {
        value: string;
        used: boolean;
    };
    rigelKey: {
        value: string;
        used: boolean;
    };
}

export default Vue.extend({
    name: "Dashboard",
    data: () => ({
        userData: null as Record<string, unknown> | null,
        loaded: false,
        userOpened: false,
        unverified: false,
        seshkey: null as null | any,
        payable: false as string | boolean,
        unsubscribable: false,
        keyData: null as UserKey | null
    }),
    async mounted() {
        const payable = await fetch(`${config.serverUrl}/api/payment/payable`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        if ((await payable.json()) === true) {
            const seshkey = await fetch(
                `${config.serverUrl}/api/payment/createPayment`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                }
            );
            this.seshkey = (await seshkey.json()).session;
            this.payable = true;
        }
        const unsubscribable = await fetch(
            `${config.serverUrl}/api/payment/unsubscribable`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            }
        );
        if ((await unsubscribable.json()) === true) {
            this.unsubscribable = true;
        }
        const data = await this.getUserData();
        if (data) {
            this.userData = data;
            if (this.userData?.role === "none") {
                this.unverified = true;
            }
            this.keyData = await this.getKeysForUser();
            this.loaded = true;
        } else {
            this.$router.push("/login");
        }
    },
    methods: {
        async resendVerificationEmail() {
            if (this.userData?.role === "none") {
                await fetch(
                    `${config.serverUrl}/api/email/sendVerificationEmail/${this.userData.id}`
                );
            }
        },
        async getUserData() {
            const resp = await fetch(`${config.serverUrl}/api/users/userData`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (resp.status === 400) {
                return null;
            } else {
                return (await resp.json()).user;
            }
        },
        async getKeysForUser(): Promise<UserKey> {
            const userData = this.userData;
            if (!userData) {
                return {
                    discordKey: {
                        value: "You are not logged in!",
                        used: false
                    },
                    rigelKey: {
                        value: "You are not logged in!",
                        used: false
                    }
                };
            }
            const resp = await fetch(
                `${config.serverUrl}/api/keys/getKeysForUser`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: userData.id
                    })
                }
            );
            const status = await resp.json();
            if (status.status !== 200) {
                return {
                    discordKey: {
                        value: status.message,
                        used: false
                    },
                    rigelKey: {
                        value: status.message,
                        used: false
                    }
                };
            } else {
                return {
                    discordKey: {
                        value: status.discordKey.value,
                        used: status.discordKey.used
                    },
                    rigelKey: {
                        value: status.rigelKey.value,
                        used: status.rigelKey.used
                    }
                };
            }
        },
        async pay() {
            if (this.seshkey?.id) {
                await stripe.redirectToCheckout({
                    sessionId: this.seshkey.id
                });
            }
        },
        async unsubscribe() {
            await fetch(`${config.serverUrl}/api/payment/cancel`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
        },
        roleToColor(role: UserRole) {
            if (role === "admin") {
                return "#cc2900";
            } else if (role === "member") {
                return "#00800f";
            } else if (role === "verified") {
                return "#003580";
            } else {
                return "#777";
            }
        }
    }
});
</script>

<style scoped></style>
