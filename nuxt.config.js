import colors from "vuetify/es5/util/colors";

export default {
    mode: "spa",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "%s - " + process.env.npm_package_name,
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                name: "og:title",
                content: "Project Unknown"
            },
            {
                name: "og:description",
                content:
                    "Project Unknown is a new, innovative cook group with lucrative opportunities and a wonderful community."
            },
            {
                name: "og:url",
                content: "https://projectunkn.com"
            },
            {
                name: "og:image",
                content: "http://imgur.com/a/1D2uFGV"
            },
            {
                name: "og:image:secure_url",
                content: "https://imgur.com/a/1D2uFGV"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        script: [{ src: "https://js.stripe.com/v3" }],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/projectunknlogo.png" }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // extend(config, ctx) {}
    }
};
