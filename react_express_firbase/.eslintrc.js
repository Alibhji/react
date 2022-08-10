module.exports = {
  env: {
    browser: true,
  },

  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
};
