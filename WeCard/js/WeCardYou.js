/**
 * Created by Ann Marie on 7/31/2014.
 */
//program to determine if person is of drinking age

$(document).ready(function(){
    $('#month').change(function() {
        birthMonth();
    });//end
    $('#day').change(function(){
        birthDay();
    });//end
    $('#year').change(function(){
        birthYear();
    });
    $('#actionButton').click(function(){
        calcAge();
    });
    $('#resetIt').click(function(){
        $('p').empty();
    });


//function to get month value from form
function birthMonth(){

    var bMonth = $('#month').val();
    console.log(bMonth);
    return bMonth;
}

//function to get day value from form
function birthDay(){
    var bDay = $('#day').val();
    console.log(bDay);
    return bDay;
}

//function to get year value from form
function birthYear(){
    var bYear = $('#year').val();
    console.log(bYear);
    return bYear;
}

function calcAge(){
    //Initialize message as empty string. Will provide user with result of age calculation
    var message = '';

    //Initialize flag to 0. If flag value is -1, person is underage and send appropriate message. If flag is 1, person is drinking age and send appropriate message
    var flag =0;

    //call birthdate functions and assign variables to their returned values in order to do comparisons in if/else code blocks
   var mb = birthMonth();
   var db = birthDay();
   var yb = birthYear();

   //create date object for today
    var nowDate = new Date();
    var nowMonth = nowDate.getMonth() + 1;      //add 1 since Jan starts at index 0
    var nowDay = nowDate.getDate();
    var nowYear = nowDate.getFullYear();
    console.log(nowMonth + "" + nowDay + "" + nowYear);

    //take difference between birth year and today's year
    var yearDiff = nowYear - yb;
    console.log(yearDiff);
    //take difference between birth month and today's month. if difference is positive, it's ok but if negative, not ok.
    var monthDiff = nowMonth - mb;
    console.log(monthDiff);

    var dayDiff = nowDay - db;
    console.log(dayDiff);

    //master if/else statements to determine if person is of drinking age
    if(yearDiff > 21){
        flag = 1;
    }
    else if(yearDiff < 21){
        flag = -1;
    }
    else{                   //if year difference is 21, needed check difference in months and days to determine if person is truly 21 or over
        if(monthDiff < 0){
            flag = -1;
        }else{
            if(monthDiff ===0){                 //if birth month matches today's month, check the difference in days
                if(db > nowDay) {
                    flag = -1;
                }
                else{
                        flag = 1;
                    }
                }//end day diff if months are equal
            else if(monthDiff > 0){
                       flag = 1;
                }
            else{
                flag = -1;

                }
            }//end monthDiff
        }//end if/else yearDiff

    //output appropriate message
    if(flag === 1){
        message = "Age 21 or over.";
        $('.okay').text(message);
    }
    else{
        message = "Below age 21."
        $('.barred').text(message);
    }

    }//end function calcAge()

});//end document ready





















