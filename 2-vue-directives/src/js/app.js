const directiveApp = new Vue({

    // link to template element
    el : "#directive-app",

    // 5 properties
    // data : {
    data : {

        title : "What are Vue Directives?",

        definition : 
                    "Vue directives are like single line JavaScript "
                    + "expressions that form part of the Vue template. "
                    + "They are added to your document’s HTML and look "
                    + "a lot like tag attributes, the most visible "
                    + "difference being that Vue directives all "
                    +"start with v- ",
        summary : 
              "In summary Vue directives contain the same logic as " 
            + "normal JavaScript expressions (for-loop, if statement, etc.) "
            + "except they are written on one single line. " 
            + "Similar to shorthand notation",
        
        commonDirectives : ["v-for","v-if","v-on","v-bind","v-show","v-model"],
        
        directiveDefinitions : [
            "Renders an element a certain number of times (similar to forEach loop) : <li v-for='item in itemArray'>",
            "Conditionally renders element based on boolean condition : <p v-if='7 < 11'> You can See Me! </p> ",
            "Adds an event listener to element : <button v-on:click='exampleFunction()'>",
            "Allows you to bind HTML attribute or Vue Instance/Component prop : eg bind to css class attribute",
            "Similar to v-if except it doesnt use conditional rendering, it uses css display property",
            "Primary way of creating two-way data binding for forms and input-type elements : <input v-model='title'>"
        ]

    },

    // objects for methods
    methods : {

    },
});