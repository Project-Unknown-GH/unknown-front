<template>
    <v-layout>
        <v-tabs v-model="tab" fixed-tabs color="white" slider-color="white">
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
                </v-form>
                <br />
                <v-btn color="success" @click="create">Submit</v-btn>
                <v-btn color="error" @click="resetForm">Reset form</v-btn>
            </v-tab-item>
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
                </v-form>
                <br />
                <v-btn color="success" @click="login">Submit</v-btn>
                <v-btn color="error" @click="resetForm">Reset form</v-btn>
            </v-tab-item>
            <v-tab>Logout</v-tab>
            <v-tab-item class="v-tab-item">
                <v-btn large block color="error" @click="logout">Log out</v-btn>
            </v-tab-item>
        </v-tabs>
        <v-snackbar v-model="errored" :top="true" color="error">
            {{ error }}
            <v-btn @click="error = ''">
                Close
            </v-btn>
        </v-snackbar>
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import config from "~/assets/config";

export default Vue.extend({
    name: "Login",
    data: () => ({
        username: "",
        email: "",
        password: "",
        error: "",
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
    computed: {
        errored() {
            return this.error !== "";
        }
    },
    methods: {
        async login() {
            const resp = await fetch(`${config.serverUrl}/api/auth/login`, {
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
            const status = await resp.json();
            if (status.status === 200) {
                await this.$router.push("/dashboard");
            } else {
                this.error = status.message;
            }
        },
        async create() {
            const resp = await fetch(
                `${config.serverUrl}/api/users/createUser`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.email,
                        username: this.username,
                        password: this.password
                    })
                }
            );
            const status = await resp.json();
            if (status.status === 201) {
                await this.$router.push("/dashboard");
            }
        },
        async logout() {
            await fetch(`${config.serverUrl}/api/auth/logout`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
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
