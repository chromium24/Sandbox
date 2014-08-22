/**
 * Created by Ann Marie on 8/21/2014.
 */
$(document).ready(function(){
    var cars = [                        //create array cars containing objects with four properties
        {
            make: "Ford",               //properties
            model: "Mustang",
            year: "2010",
            color: "blue"

        },
        {
            make: "Chevrolet",
            model: "Corvette",
            year: "1970",
            color: "red"
        }

    ];                                              //end array cars

    var newCar = {                                  //new object with four properties
        make: "Dodge",
        model: "Challenger",
        year: "2011",
        color: "purple"
    };

    cars.push(newCar);                              //push new object properties into array cars

    $("<ul></ul>").appendTo('#content');            //append a ul list to div "content"

console.log(cars);

    for(var i=0; i < cars.length; i++) {            //for loop that terminates at array length
        $("<ul></ul>").appendTo('#content');        //append a new ul list to div "content"
        var myUL = $('#content ul:last-child');     //myUL represents last ul within div "content" - by var myUL, simplifying the selector name
        $('<li>' + cars[i].make + '</li>').appendTo(myUL);  //create new li item containing property (make) of cars and append to the last ul within div "content"
        $('<li>' + cars[i].model + '</li>').appendTo(myUL); //li for model
        $('<li>' + cars[i].year + '</li>').appendTo(myUL);  //li for year
        $('<li>' + cars[i].color + '</li>').appendTo(myUL); //li for color
    }

});//end document ready




