<template>
    <div id="payment">
        <h2>Payment details:</h2>
        <card
            class="stripe-card"
            :class="{ complete }"
            :stripe="config.stripeKey"
            :options="config.stripeOptions"
            @change="complete = $event.complete"
        />
        <button class="pay-with-stripe" :disabled="!complete" @click="pay">
            Pay with credit card
        </button>
    </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import config from "@/assets/config.ts";

export default {
    components: { Card },
    data() {
        return {
            complete: false,
            config
        };
    },

    methods: {
        async pay() {
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.
            const data = await createToken();
            console.log(data.token);
        }
    }
};
</script>

<style>
.stripe-card {
    width: 300px;
    color: #fff;
    border: solid white;
    border-width: 0 0 1px 0;
    padding: 10px 10px 10px 8px;
    transition: border 0.5s;
}
.stripe-card:active {
    border: solid teal;
}
.stripe-card.complete {
    border-color: green;
}
</style>
