<template>
    <div id="payment">
        <h1>Please give us your payment details:</h1>
        <card
            class="stripe-card"
            :class="{ complete }"
            stripe="pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T"
            :options="stripeOptions"
            @change="complete = $event.complete"
        />
        <button class="pay-with-stripe" :disabled="!complete" @click="pay">
            Pay with credit card
        </button>
    </div>
</template>

<script>
import { Card, redirectToCheckout } from "vue-stripe-elements-plus";

export default {
    components: { Card },
    data() {
        return {
            complete: false,
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
            },
            seshkey: null
        };
    },

    async mounted() {
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
        const session = (await seshkey.json()).session;
        console.log("Seshkey", session);
        this.seshkey = session;
    },

    methods: {
        async pay() {
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.
            await redirectToCheckout({
                sessionId: this.seshkey.id
            });
        }
    }
};
</script>

<style>
.stripe-card {
    width: 300px;
    border: 1px solid grey;
}
.stripe-card.complete {
    border-color: green;
}
</style>
