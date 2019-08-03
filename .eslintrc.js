module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["airbnb-base", "prettier"],

  // add your custom rules here
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-param-reassign": ["error", { props: false }]
  }
};
