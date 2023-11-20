function(){
    "use strict";
    console.log("Inside iterating.js");
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const names = [
        "Name One",
        "Amanda Hugnkiss",
        "Steve Floof",
        "Seymour Buttz"
    ];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // Any of these three loops will work:

    // for(const name of names) {
    //     console.log(name);
    // }

    // for (let i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // }



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(name => {
    //     console.log(name);
    // });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
      *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    function last(array) {
        return array[array.length - 1];
    }

    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));



})();