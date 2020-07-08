<template>
    <div class="dashboard">
        Admin dashboard
        <p v-if="!authorized">You are not authorized!</p>
        <v-card v-if="authorized">
            <v-card-title>
                Users
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                v-if="users"
                :headers="[
                    ...Object.keys(users[0]).map((l) => ({
                        text: l,
                        value: l
                    })),
                    { text: 'Actions', value: 'actions', sortable: false }
                ]"
                :items="users"
                :items-per-page="5"
                :search="search"
            >
                <template v-slot:item.role="{ item }">
                    <v-chip :color="roleToColor(item.role)" dark>
                        {{ item.role }}
                    </v-chip>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small @click="deleteItem(item.id, item.role)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import config from "~/assets/config";

export default Vue.extend({
    name: "Login",
    data: () => ({
        search: "",
        users: null as null | string,
        authorized: true,
        deleting: {
            active: false,
            value: null as null | number
        }
    }),
    computed: {},
    async mounted() {
        const usersData = await this.getUsers();
        if (usersData.status === 401) {
            this.authorized = false;
        } else {
            this.users = JSON.parse(await usersData.text());
        }
    },
    methods: {
        async getUsers() {
            return await fetch(`${config.serverUrl}/api/users/getAllUsers`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        },
        async deleteItem(userid: number, role: string) {
            if (role !== "member") {
                return;
            }
            const result = confirm(
                "Are you sure you want to cancel the subscription of this user?"
            );
            if (result) {
                await fetch(`${config.serverUrl}/api/payment/cancelUser`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ userid })
                });
                const usersData = await this.getUsers();
                if (usersData.status === 401) {
                    this.authorized = false;
                } else {
                    this.users = JSON.parse(await usersData.text());
                }
            }
        },
        roleToColor(role: string) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
