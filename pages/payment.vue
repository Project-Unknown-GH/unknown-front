<template>
    <div>
        <v-snackbar v-model="errored" top>
            {{ errorMessage }}
            <v-btn color="pink" text @click="errored = false">
                Close
            </v-btn>
        </v-snackbar>
        <stripe-elements
            ref="elementsRef"
            :pk="publishableKey"
            :amount="amount"
            @token="tokenCreated"
            @loading="loading = $event"
        >
        </stripe-elements>
        <button @click="submit">Pay ${{ amount / 100 }}</button>
    </div>
</template>

<script>
import { StripeElements } from "vue-stripe-checkout";
import config from "@/assets/config";
export default {
    components: {
        StripeElements
    },
    data: () => ({
        loading: false,
        amount: 1000,
        publishableKey: "pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T",
        token: null,
        charge: null,
        errored: false,
        errorMessage: ""
    }),
    methods: {
        submit() {
            this.$refs.elementsRef.submit();
        },
        tokenCreated(token) {
            this.token = token;
            this.charge = {
                source: token.id,
                currency: "usd",
                amount: this.amount,
                description: this.description
            };
            this.sendTokenToServer(this.charge);
        },
        async sendTokenToServer(token) {
            const resp = await fetch(`${config.serverUrl}/api/payment/pay`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    stripeToken: token
                })
            });
            const status = await resp.json();
            if (status.status !== 200) {
                this.errored = true;
                this.errorMessage = status.message;
            } else {
                await this.$router.push("/dashboard");
            }
        }
    }
};
</script>
