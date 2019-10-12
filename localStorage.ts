const hasLocalStorage = typeof localStorage !== 'undefined';

function setItem(key: string, data: any): void {
    try {
        if (getItem(key)) {
            console.log(`has ${key}`)
            return;
        }
        if (hasLocalStorage) {
            return localStorage.setItem(key, JSON.stringify(data))
        }
    }
    catch (err) {

    }
}
function getItem(key: string): any {
    try {
        if (typeof key !== 'string') {
            return;
        }
        if (hasLocalStorage) {
            return localStorage.getItem(key)
        }
    }
    catch (err) {

    }
}