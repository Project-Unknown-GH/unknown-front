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
                            <span>
                                {{ userData.role.slice(1) }}
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
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

type UserRole = "admin" | "member" | "verified" | "none";

export default Vue.extend({
    name: "Dashboard",
    data: () => ({
        userData: null,
        loaded: false
    }),
    async mounted() {
        this.userData = await this.getUserData();
        if (this.userData) {
            this.loaded = true;
        } else {
            this.$router.push("/login");
        }
    },
    methods: {
        async getUserData() {
            const resp = await fetch(
                "http://localhost:7400/api/users/userData",
                {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
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
