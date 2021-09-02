<template>
  <div id="app">
     <!-- <el-row>
       <el-button type="success">按钮</el-button>
     </el-row> -->
     <!-- <button>hh</button> -->
     <router-link to="/Home">home</router-link>
     <router-link to="/About">about</router-link>
     <router-link to="/Container">container</router-link>
     <router-view/>
     
     <!-- <hello-world></hello-world> -->
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name:'App',
  components:{
    HelloWorld,
  }
}
</script>


<style>


</style>
