module.exports = {
  rules: {
    "max-empty-lines": 2,
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-custom-property", "after-comment"]
      }
    ],

    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": [
      // positioning
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",
      "transfer",

      // display & box model
      "display",
      "overflow",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "border",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",

      // color
      "background",
      "color",

      // text
      "font",
      "font-family",
      "font-size",
      "line-height",
      "text-align",

      // other
      "cursor",
      "transition",
      "animation"
    ]
  },

  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"]
};
