import "./style.scss";
import Vue, {
    CreateElement
} from "vue";

export default Vue.extend({
    name:'s-skeleton',
    props:{
        primaryColor:{
            type:String,
            default:`#eee`
        },
        secondaryColor:{
            type: String,
            default: `#ccc`
        },
        contents:{
            type:Array,
            default:[]
        },
        viewportWidth:{
            type:Number,
            default:375
        },
        unitPrecision:{
            type:Number,
            default:1
        },
        viewportUnit:{
            type:String,
            default:`vw`
        },
        tag:{
            type:String,
            default:`div`
        },

    },
    render(createElement: CreateElement):JSX.Element {
        const {
            $props: {
                prefixCls,
                contents,
                tag
            },
        } = this;
        const {
            name
        } = this.$options
        const getStyles = ({
            x = 0,
            y = 0,
            radius = [],
            width = `100vw`,
            height = `auto`,
            dark = false
        }: {
            x?: number,
            y?: number,
            radius?: number[],
            width?: string | number,
            height?: string | number,
            dark?: boolean
        }) => {
            const isNotDefault = (value: any): boolean =>
                value !== 0 && value !== `100vw` && value !== `auto`;
            const toViewport = (value: any): any => {
                if (isNotDefault(value) && typeof value === "number") {
                    const number: number = (value / this.viewportWidth) * 100;
                    return parseInt(`${number}`) === number ?
                        `${number}vw` :
                        `${number.toFixed(this.unitPrecision)}${this.viewportUnit}`;
                }
                return value;
            };
            let borderRadius: string = '';
            radius.forEach((item: number) => {
                return borderRadius += `${toViewport(item)} `;
            })
            return {
                width: toViewport(width),
                height: toViewport(height),
                borderRadius,
                top: toViewport(y),
                left: toViewport(x),
            };
        }
        let children;
        if (contents.length > 0) {
            children = contents.map((item: any, index: number) => {
                return createElement(tag, {
                    style: getStyles(item),
                    key: index,
                    class: `${name}__item`,
                })
            })
        }
        return createElement(tag, {
            class: prefixCls,
            props: {
                tag,
                name: "fade",
            },
        }, [
            createElement(tag, {
                class: `${name}__list`
            }, children)
        ])
    }
})