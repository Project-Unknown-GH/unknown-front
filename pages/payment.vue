<template>
    <div id="payment">
        <h1>Become a member of Project Unknown</h1>
        <v-btn :disabled="payable !== true" @click="pay">
            {{ payable === "Sold out" ? "Sold out" : "Pay with credit card" }}
        </v-btn>
        <v-btn :disabled="!unsubscribable" @click="unsubscribe">
            Unsubscribe
        </v-btn>
    </div>
</template>

<script lang="ts">
import config from "../assets/config";

// @ts-ignore
// eslint-disable-next-line no-undef
const stripe = Stripe(`pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T`);

export default {
    data() {
        return {
            seshkey: null,
            payable: false as string | boolean,
            unsubscribable: false
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
            this.payable = true;
        }
        const unsubscribable = await fetch(
            `${config.serverUrl}/api/payment/unsubscribable`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            }
        );
        if ((await unsubscribable.json()) === true) {
            this.unsubscribable = true;
        }
    },

    methods: {
        async pay() {
            await stripe.redirectToCheckout({
                sessionId: this.seshkey.id
            });
        },
        async unsubscribe() {
            await fetch(`${config.serverUrl}/api/payment/cancel`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
        }
    }
};
</script>
