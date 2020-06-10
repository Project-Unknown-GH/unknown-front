<template>
    <div v-if="complete" id="payment">
        <h1>Become a member of Project Unknown</h1>
        <v-btn @click="pay">
            Pay with credit card
        </v-btn>
    </div>
</template>

<script>
import config from "../assets/config";

// eslint-disable-next-line no-undef
const stripe = Stripe(`pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T`);

export default {
    data() {
        return {
            complete: false,
            seshkey: null
        };
    },

    async mounted() {
        const payable = await fetch(`${config.serverUrl}/api/payment/payable`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        if ((await payable.json()) === true) {
            const seshkey = await fetch(
                "http://localhost:7400/api/payment/createPayment",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                }
            );
            this.seshkey = (await seshkey.json()).session;
            this.complete = true;
        } else {
            this.$router.push("/dashboard");
        }
    },

    methods: {
        async pay() {
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.
            await stripe.redirectToCheckout({
                sessionId: this.seshkey.id
            });
        }
    }
};
</script>
