<template>
    <div class="dashboard">
        Admin dashboard
        <p v-if="!authorized">You are not authorized!</p>
        <v-list v-if="authorized">
            <v-list-item-group>
                <v-list-item v-for="(proxy, i) in computedProxies" :key="i">
                    <v-list-item-content>
                        <v-list-item-title>{{ proxy }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-form>
            <v-text-field v-model="newProxies" label="Proxies"></v-text-field>
            <v-btn color="success" @click="addProxies">Add proxies</v-btn>
            <v-btn color="error" @click="resetProxies">Clear all proxies</v-btn>
        </v-form>
        {{ newProxies }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import config from "~/assets/config";

export default Vue.extend({
    name: "Login",
    data: () => ({
        search: "",
        proxies: null as null | { proxy: string }[],
        newProxies: "",
        authorized: true
    }),
    computed: {
        computedProxies() {
            if (this.proxies) {
                return this.proxies.map((l) => l.proxy);
            } else {
                return null;
            }
        }
    },
    async mounted() {
        await this.getProxiesImpure();
    },
    methods: {
        async getProxiesImpure() {
            const proxiesData = await this.getProxies();
            if (proxiesData.status === 401) {
                this.authorized = false;
            } else {
                this.proxies = await proxiesData.json();
            }
        },
        async getProxies() {
            return await fetch(`${config.serverUrl}/api/proxies/`, {
                method: "GET",
                credentials: "include"
            });
        },
        async addProxies() {
            await fetch(`${config.serverUrl}/api/proxies/addProxies`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    proxies: this.newProxies.split(" ")
                })
            });
            this.getProxiesImpure();
        },
        async resetProxies() {
            await fetch(`${config.serverUrl}/api/proxies/clearProxies`, {
                method: "DELETE",
                credentials: "include"
            });
            this.getProxiesImpure();
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
