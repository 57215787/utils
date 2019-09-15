import {
    inBrowser
} from "./env"

const getDPR = (scale = 1) => inBrowser ? (window.devicePixelRatio || scale) : scale