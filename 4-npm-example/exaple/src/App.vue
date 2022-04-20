<template>
  <div id="app">

    <h1>
      {{title}}
    </h1>

    everything under here is in the hellowlrd component:

    <helloworld-elem/>

  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',

  data() {
    return {
      title : "Heloooooo"
    }
  },

  components: {
    "helloworld-elem" : HelloWorld
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
