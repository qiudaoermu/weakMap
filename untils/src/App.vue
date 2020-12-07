<template>
  <div id="app">
  </div>
</template>

<script>
import {mutiply} from '../until.js'
export default {
  name: 'App',
  created(){
    let result = mutiply([1,23,434]);
    console.log(result);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
