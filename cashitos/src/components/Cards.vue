<template>
    <div>
        <div>
            <h1 class="bg-purple text-black sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ...">Test</h1>

            <div v-for="index in cardInfo" v-bind:key="index">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            <h1>{{index.description}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <div>{{ cardInfo }}</div> -->
        </div>

    </div>
</template>

<script>
    // import data from "./data.json"

    var object = (
        {
            object1: {
                description: "Cut all the trees",
                days: -90,
                money: 100
            },
            object2: {
                description: "Drill more oil",
                days: -70,
                money: 100
            }
        }
    )

    export default {
        name: "Cards",
        data: () => ({
            cardInfo: object,
        })
    }
</script>
