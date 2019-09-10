const hasLocalStorage = typeof window.localStorage !== 'undefined';

function setItem(key: string, data: any): void {
    try {
        if (getItem(key)) {
            return;
        }
        if (hasLocalStorage) {
            return window.localStorage.setItem(key, JSON.stringify(data))
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
            return window.localStorage.getItem(key)
        }
    }
    catch (err) {

    }
}