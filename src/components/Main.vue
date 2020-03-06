<template>
  <div>
    <div v-if="instructions" id="main">
      <div class="earthPosition">
      <img class="cover" src="@/assets/images/zero-days-left.png" alt="cover">
      </div>
      <instructions />
      <button class="bg-transparent hover:bg-gray-700 text-black-700 font-semibold hover:text-black py-2 px-4 border border-gray-800 rounded" @click.once="click">Click to Start</button>

   </div>
   <div v-if="!instructions">

     <div class="earthPosition">
        <div v-if="daysLeft > 100 && daysLeft <= 365">
          <img class="earth" src="@/assets/images/ok-earth.png" alt="mediocre earth">
        </div>
        <div v-if="daysLeft < 100">
          <img class="earth" src="@/assets/images/bad-earth.png" alt="terrible earth">
        </div>
        <div v-if="daysLeft > 366">
          <img class="earth" src="@/assets/images/good-earth.png" alt="thriving earth">
        </div>
     </div>

     <div v-if="daysLeft > 0">
        <cards />
        <h2>You have {{ choicesLeft }} more choices!</h2>
        <h2>You have made K{{ cashObtained }}</h2>
        <h2>There are {{ daysLeft }} days left </h2>
     </div>
     <div v-if="daysLeft < 0">
        <h1>Womp womp! The earth just died! Here's how much money you made: K{{cashObtained}}</h1>
     </div>
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
  .earth {
    height: 300px;
    width: 300px;
  }
  .cover {
    height: 300px;
    width: 500px;
    display: flex;
    justify-content: center;
    padding-bottom: 3%;
  }
  .earthPosition {
    display: flex;
    justify-content: center;
  }
</style>
