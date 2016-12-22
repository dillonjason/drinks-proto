module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "google", "plugin:react/recommended"],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "window": true,
        "console": true,
        "React": true,
        "localStorage": true,
        "document": true,
        "navigator": true,
        "location": true,
        "sessionStorage": true,
        "Storage": true,
        "XMLHttpRequest": true,
        "require": true,
        "__dirname": true,
        "process": true,
        "exports": true,
        "module": true
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "max-len": [1, 120, 2, {
            ignoreComments: true,
            ignoreUrls: true
        }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "require-jsdoc" : ["off"],
        "comma-dangle" : ["off"]
    }
};