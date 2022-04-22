// =========================== Class =========================== 
class Car {

    constructor(brand, division, power) {
        
        this._brand = brand;
        this._division = division;
        this._power = power;

    }

    get getBrand() {
        return this._brand
    }
}

// =========================== Vue Instance ===========================


const standings = new Vue({

    el : '#app-standings',
    
    data : {
        test : 'hello',

        registeredDrivers : [],

        car1 : new Car('Honda', 'N400', "401bhp")
    },

    mounted() {

        // if vrl-app-key is empty
        if (!localStorage.getItem("vrl-app-key")) {

            let initArray = []
            localStorage.setItem("vrl-app-key", JSON.stringify(initArray))
        }

        // getting array from storage and saving it to registeredDrivers array property
        this.registeredDrivers = JSON.parse(localStorage.getItem("vrl-app-key"))
    }
    
})

