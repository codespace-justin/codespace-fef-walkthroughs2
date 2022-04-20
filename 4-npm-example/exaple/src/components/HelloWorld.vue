<template>
  <div class="hello">

    <hr>
    <h1>
      {{test}}
    </h1>

    <hr>

    <ul>
      <li v-for="(number, i) in numbers" :key="i">
        {{number}}
      </li>
    </ul>
    <hr>

  </div>
</template>



<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      test : "Hello world",

      numbers : [20, 55, 7, 89, 5],
    }
    
  },

  methods : {
    greet() {
      console.log('saluton mondo')
    }
  },

  beforeCreate() {
    alert('the component hasnt been created yet.')
  }

}
</script>



<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
