import {
    isAndroid,
    isIOS,
} from "./env"

const doc: Document = document;
const docEl = doc.documentElement;
const dpr = window.devicePixelRatio || 1;

docEl.setAttribute('data-dpr', `${dpr}`);
if (isIOS) {
    docEl.setAttribute('data-device', 'iphone');
} else if (isAndroid) {
    docEl.setAttribute('data-device', 'android');
}

if (dpr >= 2) {
    const fakeBody = doc.createElement('body');
    const testElement = doc.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
}



