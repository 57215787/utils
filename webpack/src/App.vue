<template>
    <div id="app">
        <!-- <skeleton :contents="[{height:400}]"/> -->
        <div></div>
    </div>
</template>
<script lang="ts">
import SButton from "./packages/button"
import Skeleton from "./packages/skeleton"
export default {
    components:{
        SButton,
        Skeleton
    },
    data(){
        return{
            list:[
                1,{
                    a:1
                }
            ]
        }
    },
    created(){

    },
    methods:{
        handleClick(){
            this.list[1].a = 2;
            this.list[0] = 2
        }
    }
}
</script>
<style lang="scss">
    
</style>