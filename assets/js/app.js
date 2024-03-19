//console.log("Ciaooooooooooooooooooooooooooo");

const { createApp } = Vue
createApp({
    data() {
        return {
            randomSentence: null,
            randomNumber: null,
            myEmailList: [],
            myPromiseList: [],
            myEmailListBonus: []
        }
    },

    methods: {
        // Morning test with Sentence
        callApiRandomSentence() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((response) => {
                    //console.log(response);
                    //console.log(response.data);
                    this.randomSentence = response.data.response
                    //console.log(this.randomSentence);
                }
                )
        },

        // Morning test with Random numbers 0-9
        callApiRandomInt() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {
                    //console.log(response);
                    //console.log(response.data);
                    this.randomNumber = response.data.response
                    //console.log(this.randomNumber);
                }
                )
        },

        // Genera una mail random
        callApiRandomEmail() {
            axios.
                get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    //console.log(response);
                    //console.log(response.data);
                    this.myEmailList.push(response.data.response)
                    //console.log(this.myEmailList);
                }
                )
        },

        // Genera una lista di n mail 
        generateMailList(n) {
            for (let i = 0; i < n; i++) {
                this.callApiRandomEmail();
            }
        },

        // Genera una lista di n email
        generateMailListBonus() {
            for (let i = 0; i < 10; i++) {
                this.myPromiseList.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
            }
            // Vedo cosa ottengo
            console.log(this.myPromiseList);
            // Posso usare tutto con then?
            /*             this.myPromiseList.then((response)=>{
                            //this.myPromiseList.then is not a function
                            console.log(response);
                        }) */

            // Promise.any
            console.log(Promise.any(this.myPromiseList));
            // Promise {<pending>} NON ERRORE 
            // Posso usare then su tutto?
            (Promise.any(this.myPromiseList)).then((response) => {
                //Cosa è?
                console.log(response); // Una sola mail
            })

            // Promise.all
            console.log(Promise.any(this.myPromiseList));
            // Promise {<pending>} NON ERRORE 
            // Posso usare then su tutto?
            (Promise.all(this.myPromiseList)).then((response) => {
                //Cosa è?
                console.log(); // ECCOLOOOOOOOOOOOOOOOO
                console.log(response.data); // Undefined
                //console.log(response.data.response); //Uncaught
                console.log(response[0].data); // E' un array, vedo il primo elemento
                // Ho un array di oggetti il cui .data è la mail che mi interessa
                //Faccio un tentativo con il foreach
                response.forEach(element => {
                    console.log(element); //Eccoli!
                    console.log(element.data); //Eccoli!
                    console.log(element.data.response); //Eccoli!
                    this.myEmailListBonus.push(element.data.response) 

                });
                //Verifico 
                console.log(this.myEmailListBonus); //Eccola!
            })
            
        }



    },


    mounted() {
        this.callApiRandomSentence();
        this.callApiRandomInt();

        // Commento per fare il bonus 
        // Genero una mail random per 10 volte
        /*         for (let i = 0; i < 10; i++) {
                    this.callApiRandomEmail();
                } */

        this.generateMailList(10);

        //Bonus List - Printed all in one time
        this.generateMailListBonus();

    }


}).mount('#app')