import Vue, {
    VNodeData,
    CreateElement
} from "vue"
export function mount(Component: any, data?: VNodeData) {
    const instance = new Vue({
        el: document.createElement('div'),
        props: Component.props,
        render(createElement: CreateElement) {
            return createElement(Component, {
                props: this.$props,
                ...data
            });
        }
    });

    document.body.appendChild(instance.$el);

    return instance;
}