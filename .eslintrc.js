module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "prettier",
        "prettier/vue",
        "plugin:prettier/recommended",
        "plugin:nuxt/recommended"
    ],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        "spaced-comment": ["error", "always"],
        "no-unused-vars": 0,
        "require-atomic-updates": 0,
        "import/no-commonjs": 1,
        "import/no-amd": 2,
        "import/no-cycle": ["error", { maxDepth: 1 }],
        "node/no-missing-import": [
            "warn",
            { tryExtensions: [".js", ".json", ".node", ".ts"] }
        ],
        "node/no-unpublished-import": 0,
        "node/no-unsupported-features/es-syntax": 0,
        "prettier/prettier": 2,
        "promise/always-return": 1,
        "promise/prefer-await-to-then": 2,
        "promise/prefer-await-to-callbacks": 2,
        "@typescript-eslint/explicit-function-return-type": 0
    }
};
