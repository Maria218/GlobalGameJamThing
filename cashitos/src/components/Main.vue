<template>
  <div>
    <div v-if="instructions" id="main">
      <button class="bg-transparent hover:bg-gray-700 text-black-700 font-semibold hover:text-black py-2 px-4 border border-gray-800 rounded" @click.once="click">Click to Start</button>
      <instructions />
   </div>
   <div v-if="!instructions">
     <cards />
     <h2>You have {{ choicesLeft }} choices left </h2>
     <h2>You have made K{{ cashObtained }}</h2>
     <h2>There are only {{ daysLeft }} days left </h2>
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
      new Audio(require("@/assets/audio/main_soundtrack.mp3")).play();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main {
    padding-top: 60px;
  }
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
