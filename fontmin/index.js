const Fontmin = require('fontmin')

const fontminSrc = './src/fonts/SF-Pro-Display-Regular.otf'
const fontminDest = './dist/'
const locales = require("./src/locales/en-US.json")
const fontmin = new Fontmin().src(fontminSrc).use(Fontmin.glyph({
        text: 'Edit payment'
    }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff())
    .use(Fontmin.ttf2svg())
    .use(Fontmin.css())
    .dest(fontminDest)

fontmin.run((err, files, stream) => {
    if (err) {
        console.err(err)
    } else {
        console.log('success')
    }
})