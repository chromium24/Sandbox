/**
 * Created by Ann Marie on 8/15/2014.
 */
$(document).ready(function(){
    function yearDiff(){
        var year1 = 1960;
        var year2 = 2014;
        var diff = year2 - year1;
        console.log(diff);
        return diff;
    }

    var data = yearDiff();
    console.log(data);
    $('span').text("The Impala was built " + data + " years ago");



});



