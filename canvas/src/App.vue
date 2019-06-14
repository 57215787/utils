<template>
<div id="app">
  <button>button</button>
  <button class="button">button</button>
  <button class="button-default">button</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Hammer from "hammerjs"
import {
    roundRect
} from "./utils/canvas-round-rect"
import draw from "./utils/draw"
export default Vue.extend({
    data() {
        return {
            

        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        
    },
    components: {
        draw
    }
});
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

canvas {
    display: block;
}


button{
    display: block;
    border: 1px solid #000;
    height: auto;
    background-color: transparent;
    border-radius: 20px;
    line-height: 1.15;
    font-size: 14px;
    width: 335px;
    height: 41px;
}

.button{
    @at-root{
        @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
            #{&}{
                border-width: .5px;
            }
         }
    }
}
.button-default{
    @extend .button;
     @at-root{
        @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
            #{&}{
                border-width: .5px;
            }
         }
    }
}
</style>
