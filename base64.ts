export const Base64 = {
    encode(string: any) {
        return window.btoa(unescape(encodeURIComponent(JSON.stringify(string))))
    },
    decode(string: any) {
        return decodeURIComponent(escape(window.atob(string)));
    }
}
