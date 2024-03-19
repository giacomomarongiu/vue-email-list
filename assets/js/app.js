//console.log("Ciaooooooooooooooooooooooooooo");

const { createApp } = Vue
createApp({
    data() {
        return {
            randomSentence: null,
            randomNumber: null,
            myEmailList: [],
        }
    },

    methods: {
        // Morning test with Sentence
        callApiRandomSentence() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((response) => {
                    console.log(response);
                    console.log(response.data);
                    this.randomSentence = response.data.response
                    console.log(this.randomSentence);
                }
                )
        },

        // Morning test with Random numbers 0-9
        callApiRandomInt() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {
                    console.log(response);
                    console.log(response.data);
                    this.randomNumber = response.data.response
                    console.log(this.randomNumber);
                }
                )
        },

    },


    mounted() {
        this.callApiRandomSentence();
        this.callApiRandomInt();
    }


}).mount('#app')