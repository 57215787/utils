import {
    isNative
} from "./is-native"
let _Set;
if (typeof Set !== 'undefined' && isNative(Set)) {
    _Set = Set;
}
else {
    _Set = class Set {
        set: Object;
        constructor() {
            this.set = Object.create(null)
        }
        has(key: string | number) {
            return this.set[key] === true
        }
        add(key: string | number) {
            return this.set[key] = true
        }
        clear() {
            this.set = Object.create(null)
        }
    }
    console.log(new _Set(1,2,3))
}