<template>
    <v-layout column justify-center align-center>
        <div id="stripes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1 class="titleWords">Project Unknown</h1>
        <h3 class="subtitleWords">A new, innovative cook group.</h3>
        <br />
        <h2
            style="font-family: 'Montserrat', sans-serif; font-size: 36px; text-align: center"
        >
            Why Project Unknown?
        </h2>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-account</v-icon>
                        <v-card-title class="justify-center">
                            Great community
                        </v-card-title>
                        <v-card-text>
                            Our community is helpful, friendly, and will always
                            help you out with any botting problems or questions
                            that you might have.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-robot</v-icon>
                        <v-card-title class="justify-center">
                            Custom-built monitors
                        </v-card-title>
                        <v-card-text>
                            Our development team has carefully constructed a set
                            of store monitors in order to keep you up to date on
                            the latest restocks.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-discord</v-icon>
                        <v-card-title class="justify-center">
                            Exclusive discord
                        </v-card-title>
                        <v-card-text>
                            If you join the group, you gain access to an
                            exclusive Discord server with plenty of monitors and
                            a great community.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-cash-multiple</v-icon>
                        <v-card-title class="justify-center">
                            Affordable pricing
                        </v-card-title>
                        <v-card-text>
                            The price to join is especially cheap, with a price
                            of we don't know yet. Completely worth the money.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-laptop</v-icon>
                        <v-card-title class="justify-center">
                            Rigel
                        </v-card-title>
                        <v-card-text>
                            Rigel is an automated chrome extension that
                            maximizes your chances of checking out Supreme. Put
                            in your info, add your item to the cart, and Rigel
                            will do the rest.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="ma-3 pa-6" style="text-align: center">
                        <v-icon>mdi-gift</v-icon>
                        <v-card-title class="justify-center">
                            Giveaways
                        </v-card-title>
                        <v-card-text>
                            We host a large amount of giveaways, giving away
                            things like sl0ts, Discord Nitro, ACO's, and more!
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-card class="ma-3 pa-6" style="text-align: center">
            <v-card-title
                class="justify-center"
                style="font-family: 'Montserrat',sans-serif; font-size: 36px; letter-spacing: 1pt"
                >Register</v-card-title
            >
            <v-btn rounded color="error" to="login">Register now!</v-btn>
            <v-card-text
                >Creating an account is free. Once you are registered, you can
                pay [amount] to become a paid member of Project
                Unknown!</v-card-text
            >
        </v-card>
    </v-layout>
</template>

<script lang="ts">
export default {
    data: () => ({
        show: false
    })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#stripes span:nth-child(1) {
    grid-column: span 1;
    background: #35356e;
}
#stripes span:nth-child(2) {
    grid-column: span 2;
    background: #2d3e62;
}
#stripes span:nth-child(3) {
    grid-column: span 2;
    background: #37173b;
}
#stripes span:nth-child(4) {
    grid-column: 6;
    grid-row: 3;
    background: #201565;
}
#stripes span:nth-child(5) {
    grid-column: span 2;
    grid-row: 4;
    background: #241659;
}
#stripes {
    width: 100vw;
    height: calc(100vh - 100px);
    background: linear-gradient(150deg, #35356e 15%, #201565 70%, #111e2c 94%);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    transform: skewY(-12deg);
    transform-origin: 0;
    margin-top: -12px;
}
.titleWords {
    position: absolute;
    top: 20vh;
    text-align: center;
    font-size: 7vh;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 3pt;
}
.subtitleWords {
    position: absolute;
    top: 35vh;
    text-align: center;
    font-size: 3.5vh;
    font-family: "Montserrat", sans-serif;
}
@media only screen and (max-width: 650px) {
    .subtitleWords {
        top: 45vh;
    }
}
</style>
