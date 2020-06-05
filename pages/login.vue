<template>
    <v-layout>
        <v-tabs v-model="tab" fixed-tabs>
            <v-tab>Login</v-tab>
            <v-tab-item class="v-tab-item">
                <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                    ></v-text-field>
                    {{ email }} {{ password }}
                </v-form>
                <br />
                <v-btn color="success" @click="login">Submit</v-btn>
                <v-btn color="error" @click="resetForm">Reset form</v-btn>
            </v-tab-item>
            <v-tab>Register</v-tab>
            <v-tab-item class="v-tab-item">
                <v-form>
                    <v-text-field
                        v-model="username"
                        label="Username"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                    ></v-text-field>
                    {{ email }} {{ password }}
                </v-form>
                <br />
                <v-btn color="success">Submit</v-btn>
                <v-btn color="error" @click="resetForm">Reset form</v-btn>
            </v-tab-item>
            <v-tab>Logout</v-tab>
            <v-tab-item class="v-tab-item">
                <v-btn large block color="error" @click="logout">Log out</v-btn>
            </v-tab-item>
        </v-tabs>
        {{ status }}
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "login",
    data: () => ({
        username: "",
        email: "",
        password: "",
        status: "",
        emailRules: [
            (v: string) => !!v || "E-mail is required",
            (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        passwordRules: [
            (v: string) => !!v || "Password is required",
            (v: string) =>
                /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/.test(
                    v
                ) ||
                "Password must contain 8 characters, and at least 1 number and special character"
        ],
        tab: null
    }),
    methods: {
        async login() {
            const resp = await fetch("http://localhost:7400/api/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            });
            this.status = await resp.json();
        },
        async logout() {
            const resp = await fetch("http://localhost:7400/api/auth/logout", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            this.status = await resp.json();
        },
        resetForm() {
            this.username = "";
            this.email = "";
            this.password = "";
        }
    }
});
</script>

<style scoped>
.v-tab-item {
    padding: 20px;
}
</style>
