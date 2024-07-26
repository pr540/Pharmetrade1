

  module.exports = {
    "presets": [
      ["@babel/preset-env", {
        "targets": {
          "safari": "12"
        },
        "useBuiltIns": "entry",
        "corejs": 3
      }]
    ],
    "plugins": ["@babel/plugin-transform-react-jsx"]
  }
  