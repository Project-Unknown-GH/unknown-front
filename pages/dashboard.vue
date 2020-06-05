<template>
    <v-layout>
        {{ userData }}
    </v-layout>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
    name: "Dashboard",
    data: () => ({
        userData: null
    }),
    async mounted() {
        this.userData = await this.getUserData();
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
            return await resp.json();
        }
    }
});
</script>

<style scoped></style>
