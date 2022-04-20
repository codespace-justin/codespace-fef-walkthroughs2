// ----- Vue Instance -----
let vueIntroApp = new Vue({

    // template - View
    el: "#app",

    // properties - Variables
    data: {
        name: "Justin",
        age: 25,
        job: 'Code Coach'
    },

    // methods - Functions
    methods: {
        hello() {
            console.log(`Hello ${this.name}`);
        }
    }

});