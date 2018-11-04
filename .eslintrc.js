// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: ["html"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    "no-unused-vars": [0],
    // "no-unused-vars": ["error", { "vars": "none", "args": "none", "ignoreRestSiblings": true }],
    "no-undef": ["error", { typeof: false }],
    "prefer-template": "error",
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    indent: 0,
    semi: ["error", "never"],
    "arrow-body-style": ["error", "always"],
    "max-len": ["error", { "code": 200 }],
    "linebreak-style": 0,
    "no-console": 0,
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    "no-shadow": ["error", { allow: ["state"] }],
    "no-param-reassign": 0,
    "operator-assignment": ["error", "never"],
    "no-underscore-dangle": ["error", { "allow": ["_chart", "_datasetIndex", "_index"] }],
    // 'import/prefer-default-export': 0,
    // allow optionalDependencies
    // 'import/no-extraneous-dependencies': ['error', {
    //   'optionalDependencies': ['test/unit/index.js']
    // }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  },
  globals: {
    $: true,
    jQuery: true
  }
};
