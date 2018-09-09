module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules" : {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": ["warn"]
  }
};
