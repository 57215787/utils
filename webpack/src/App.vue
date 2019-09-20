<template>
    <div id="app">
        <skeleton :contents="[{height:400}]"/>
    </div>
</template>
<script lang="ts">
import SButton from "./packages/button"
import Skeleton from "./packages/skeleton"
export default {
    components:{
        SButton,
        Skeleton
    }
}
</script>
<style lang="scss">
    
</style>