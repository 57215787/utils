import "./style.scss";
import Vue, {
    CreateElement
} from "vue";
export default Vue.extend({
    name: 's-button',
    props: {
        tag: {
            type: String,
            default: `a`
        },
        type: {
            type: String,
            default: `default`
        },
        disabled: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        inline: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        }
    },
    render(createElement: CreateElement): JSX.Element {
        const {
            tag,
            type,
            disabled,
            radius,
            loading,
            outline,
            inline,
            round
        } = this.$props;
        const {
            name
        } = this.$options;
        const _tag = createElement(tag);

        return createElement(tag, {
            attrs: {
                role: `button`,
                'aria-disabled': disabled.toString()
            },
            class: [name, 
              `${name}--${type}`,
                {
                [`is-disabled`]: disabled,
                [`is-radius`]: radius,
                [`is-loading`]: loading,
                [`is-round`]: round,
            }],
            
        }, [
            createElement(`span`, {

            }, this.$slots.default)
        ])
    }
})