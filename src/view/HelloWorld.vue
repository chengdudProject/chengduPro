<template>
  <div id="app">
    <el-button type="primary" @click="togo('search')">搜索页</el-button>
    <el-button type="primary" @click="togo('searchContent')">搜索列表</el-button>
    <el-button type="primary" @click="togo('contentRead')">内容精读</el-button>
    <el-button type="primary" @click="togo('mindMapping')">思维导图</el-button>
    <el-button type="primary" @click="togo('relationNetwork')">关系网</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'app',
  methods:{
    togo(path){
      this.$router.push({
        path:`/${path}`
      })
    }
  }
}
</script>
 
<style scoped>
  
</style>