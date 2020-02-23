<template>
    <div id="relationBox">
        <search-box></search-box>
        <div id="relationContent">
            <echarts-relation></echarts-relation>
        </div>
    </div>
</template>
<script>
import SearchBox from "../components/SearchBox";
import echartsRelation from "../components/echartsRelation";
export default {
    components:{
        SearchBox,echartsRelation
    },
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
#relationContent{
    width: 90%;
    height: calc(100vh - 120px);
    margin:0 5%;
    border: 1px solid #ccc;
}
</style>