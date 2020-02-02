<template>
    <div>
        <div>
            <h1 class="bg-purple text-black sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ...">Test</h1>

            <div v-for="index in cardInfo" v-bind:key="index">
                <div @click="effects(index.days, index.money)" class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <h1>{{index.description}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from "vuex";

var object = (
        {
            object1: {
                description: "Cut all the trees",
                days: -275,
                money: 100
            },
            object2: {
                description: "Drill more oil",
                days: -70,
                money: 100
            },
            object3: {
                description: "Build a forest reserve",
                days: 50,
                money: 50
            },
            object4: {
                description: "Start a war",
                days: -70,
                money: 70
            },
            object5: {
                description: "Open a sweatshop",
                days: -10,
                money: 70
            },
            object6: {
                description: "build a wall",
                days: 0,
                money: 50
            },
            object7: {
                description: "Start a cattle ranch",
                days: -10,
                money: 40
            },
            object8: {
                description: "Start a wildfire",
                days: -50,
                money: -100
            },
            object9: {
                description: "Clear a forest",
                days: -20,
                money: 20
            },
            object10: {
                description: "Dump waste into the ocean",
                days: -70,
                money: 45
            },
            object11: {
                description: "Build a dam",
                days: -10,
                money: 20
            },
            object12: {
                description: "Dump nuclear waste",
                days: -70,
                money: 60
            },
            object13: {
                description: "Poach endangered wildlife",
                days: -50,
                money: 10
            },
            object14: {
                description: "Add more cars",
                days: -30,
                money: 20
            },
            object15: {
                description: "Open a coal mine",
                days: -20,
                money: 10
            },
            object16: {
                description: "Reduce employee wages",
                days: -5,
                money: 60
            },
            object17: {
                description: "Fire half of workforce",
                days: -5,
                money: 0
            },
            object18: {
                description: "Legalize child labour",
                days: -5,
                money: 60
            },
            object19: {
                description: "Create a new disease",
                days: -100,
                money: 50
            },
            object20: {
                description: "Close schools",
                days: -2,
                money: -10
            },
            object21: {
                description: "Build schools",
                days: -3,
                money: -5
            },
            object22: {
                description: "Recycle",
                days: 20,
                money: 10
            },
            object23: {
                description: "Advocate for world peace",
                days: 20,
                money: 10
            },
            object24: {
                description: "Build an animal sanctuary",
                days: 30,
                money: -15
            },
            object25: {
                description: "Do nothing",
                days: -70,
                money: 0
            },
            object26: {
                description: "Ban plastic straws",
                days: 10,
                money: 0
            },
            object27: {
                description: "Make electric vehicles",
                days: 20,
                money: 30
            },
            object28: {
                description: "Push plant based alternatives for food",
                days: 10,
                money: 10
            },
            object29: {
                description: "Invest in green energy",
                days: 60,
                money: 60
            },
            object30: {
                description: "Improve working conditions",
                days: 5,
                money: -5
            },
            object31: {
                description: "Open all borders",
                days: 10,
                money: 30
            },
            object32: {
                description: "Do green farming",
                days: 20,
                money: 20
            },
            object33: {
                description: "Clean the ocean floor",
                days: 20,
                money: 0
            },
            object34: {
                description: "End child labour",
                days: 10,
                money: -30
            },
            object35: {
                description: "Improve healthcare",
                days: 30,
                money: -10
            },
            object36: {
                description: "End free speech",
                days: -40,
                money: 0
            },
            object37: {
                description: "Promote free speech",
                days: 30,
                money: 0
            },
            object38: {
                description: "Push alternative energy",
                days: 40,
                money: -20
            },
            object39: {
                description: "Provide sustainable housing",
                days: 20,
                money: -10
            },
            object40: {
                description: "Build more chemical factories",
                days: -30,
                money: 20
            },
        }
    )



export default {
        
        name: "Cards",
        data: () => ({
            cardInfo: object,
            daysLeft: 365,
            money: 0
        }),
        methods: {
            ...mapMutations(["makeChoice", "calcDays","calcCash"]),
            effects(days, money) {
                //this.daysLeft += days
                //this.money += money
                this.makeChoice();
                this.calcDays(days);
                this.calcCash(money);
            }
        }
    }
</script>
