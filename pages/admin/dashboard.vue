<template>
    <div class="dashboard">
        Admin dashboard
        <p v-if="!authorized">You are not authorized!</p>
        <v-card>
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
                :headers="
                    Object.keys(users[0]).map((l) => ({ text: l, value: l }))
                "
                :items="users"
                :items-per-page="5"
                :search="search"
            >
                <template v-slot:item.role="{ item }">
                    <v-chip :color="roleToColor(item.role)" dark>
                        {{ item.role }}
                    </v-chip>
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
        authorized: true
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
