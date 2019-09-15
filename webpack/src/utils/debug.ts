
export function noop(a?: any, b?: any, c?: any) { }

export let warn = noop
export let tip = noop

if (process.env.NODE_ENV !== 'production') {
    const hasConsole = typeof console !== 'undefined'
    warn = (msg) => {
        if (hasConsole) {
            console.error(`${msg}`)
        }
    }

    tip = (msg) => {
        if (hasConsole) {
            console.warn(`${msg}`)
        }
    }
}
