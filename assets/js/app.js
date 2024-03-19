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

        // Genera una mail random
        callApiRandomEmail() {
            axios.
                get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    console.log(response.data);
                    this.myEmailList.push(response.data.response)
                    console.log(this.myEmailList);
                }
                )
        },



    },


    mounted() {
        this.callApiRandomSentence();
        this.callApiRandomInt();

        //Genero una mail random per 10 volte
        for (let i = 0; i < 10; i++) {
            this.callApiRandomEmail();
        }

    }


}).mount('#app')