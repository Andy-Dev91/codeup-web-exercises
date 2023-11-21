(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function() {
            let area = Math.PI * (this.radius ** 2);
            return area;
        },

        logInfo: function(doRounding) {
            let area = this.getArea(); // Get the area using the getArea method

            if (doRounding) {
                area = Math.round(area); // Round the area to the nearest integer if doRounding is true
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();