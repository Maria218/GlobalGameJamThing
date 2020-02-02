<template>
  <div>
    <div v-if="instructions">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.once="click">Click to Start</button>
      <instructions />
      <cards />

   </div>
   <div>
     <h1>data from another component</h1>
     <h2>you have {{ choicesLeft }} choices left </h2>
     <h2>K {{ cashObtained }}</h2>
     <h2>only {{ daysLeft }} days left </h2>

   </div>
  </div>
</template>

<script>
import Instructions from './Instructions.vue';
import Cards from './Cards.vue'
import { mapState } from "vuex";


export default {
  name: 'HelloWorld',
  components: {
    Instructions,
    Cards
  },
  props: {
    msg: String
  },
  data: () => ({
    instructions: true
  }),
  computed: {
            ...mapState(["choicesLeft","daysLeft","cashObtained"])
        },
  methods: {
    click() {
      this.instructions = false
    }
  },
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
