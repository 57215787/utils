module.exports = {
    plugins: {
        "autoprefixer":{},
        "postcss-px-to-viewport": {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 1,
            viewportUnit: 'vw',
            selectorBlackList: [
                'hairlines'
            ],
            minPixelValue: 1,
            mediaQuery: false
        },
        "cssnano": {
            "postcss-zindex": false
        },
        "postcss-flexbugs-fixes": {
            bug6: false
        },
        // "stylelint":{}
    }
}