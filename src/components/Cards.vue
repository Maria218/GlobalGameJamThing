<template>
  <div class="container my-12 mx-auto">
    <div class="flex flex-wrap">
      <div
        v-for="index in shuffledList().slice(0,4)"
        v-bind:key="index.description"
        class="cards p-5 sm:w-1/2 md:w-1/2 lg:w-1/2"
      >
        <div
          @click="effects(index.days, index.money)"
          class="max-w-sm w-full lg:flex rounded-lg border-r border-b border-l border-t border-gray-700 lg:border-l lg:border-t lg:border-r lg:border-b lg:border-gray-700 bg-white"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <h1 class="text-center">{{index.description}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import anime from "animejs/lib/anime.es.js";
import shuffle from "lodash.shuffle";

export default {
  name: "Cards",
  data: () => ({
    money: 0,
    control: 0,
    gameOver: false
  }),
  computed: {
    ...mapState(["cardInformation"])
  },
  methods: {
    ...mapMutations(["makeChoice", "calcDays", "calcCash", "remove"]),
    effects(days, money) {
      this.makeChoice();
      this.calcDays(days);
      this.calcCash(money);
      this.remove();
    },
    animateCards() {
      anime({
        targets: ".cards",
        scale: {
          value: [1, 0.9],
          duration: 1200,
          easing: "linear"
        },
        loop: true
      });
    },
    shuffledList() {
      let questions;
      questions = this.cardInformation;
      questions = shuffle(questions);
      return questions;
    }
  },

  mounted() {
    this.animateCards();
  },
  updated() {
    this.animateCards();
  }
};
</script>

<style scoped>
h2 {
  color: black;
}
.cards {
  display: flex;
  justify-content: center;
}
.description {
  text-align: center;
}
</style>