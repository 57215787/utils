import Vue, {
    CreateElement
} from "vue";

export default Vue.extend({
    data() {
        return {
            canvasElement:  {},
            screenAvailWidth: window.screen.availWidth,
            screenAvailHeight: window.screen.availHeight,
            canvasRenderingContext2D: {},

        }
    },
    render(createElement: CreateElement): any {
        const {
            screenAvailWidth,
            screenAvailHeight
        } = this;
        return createElement('canvas', {
            attrs: {
                
                width: screenAvailWidth,
                height: screenAvailHeight
            },
            ref: 'canvas',
        })
    },
    mounted(){
        window.addEventListener('resize', this.resize);
        this.draw();
    },
    methods: {
        resize(event:any){
            this.draw();
        },
        draw() {
            if (!(this.$refs.canvas instanceof HTMLCanvasElement)) {
                return;
            }
            this.canvasElement = this.$refs.canvas;

            const canvasRenderingContext2D = this.canvasElement.getContext('2d');
            if (canvasRenderingContext2D) {
                this.canvasRenderingContext2D = canvasRenderingContext2D
            }
            const image: any = new Image();
            image.src = require('@/assets/banner.png');
            image.onload = ({
                path: [{
                    width,
                    height
                }]
            }: any) => {
                const realHeight = height / (width / this.screenAvailWidth);
                this.canvasRenderingContext2D.drawImage(image, 0, 0, this.screenAvailWidth, realHeight);

                
            }
        }
    }
})