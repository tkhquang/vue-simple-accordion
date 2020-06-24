module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-recommended-scss"
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "block-no-empty": true,
    "color-hex-length": "long",
    "color-no-invalid-hex": true,
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: []
      }
    ]
  }
};
