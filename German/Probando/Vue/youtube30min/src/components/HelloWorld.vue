<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{texto}} te desea {{autor}}</h2>
    <miComponente></miComponente>
    
  </div>
</template>

<script>
import MiComponente from './miComponente.vue'
export default {
  name: 'HelloWorld',
  components: {MiComponente},
  props: {
    msg: String
  },
  data(){
    return {
      texto: "Hola mundo desde el componente",
      autor: "German"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
