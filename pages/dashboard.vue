<template>
    <v-layout>
        <v-container>
            <v-row>
                <v-card v-if="loaded" style="clear: both">
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
                </v-card>
            </v-row>
            <v-row>
                <v-expansion-panels v-if="loaded" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            E-mail
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ userData.email }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Discord Key
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Not supported!
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Random row
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Just something here for testing.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
                <v-card-text>
                    If you fail to verify your email within the next 3 days,
                    your account will be deleted.
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

type UserRole = "admin" | "member" | "verified" | "none";

export default Vue.extend({
    name: "Dashboard",
    data: () => ({
        userData: null,
        loaded: false,
        unverified: true
    }),
    async mounted() {
        const data = await this.getUserData();
        if (data) {
            this.loaded = true;
            this.userData = data;
        } else {
            this.$router.push("/login");
        }
    },
    methods: {
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
