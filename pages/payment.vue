<template>
    <div>
        <v-snackbar top v-model="errored">
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
            // for additional charge objects go to https://stripe.com/docs/api/charges/object
            this.charge = {
                source: token.id,
                currency: "usd",
                amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                description: this.description // optional description that will show up on stripe when looking at payments
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
