// create a table - displays hours and save buttons. open text row to input information
//input rows to store into local storage when save is pressed. change colors of each row based on time (past, present and future)
//individual inputs for each time block
//display current date at the top
//Global Variables

var currentMomentDate = moment().format("MMM Do YY"); 

var hours = ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var textDesc = ["9TD", "10TD", "11TD", "12TD", "1TD", "2TD", "3TD", "4TD", "5TD"]

//functions
$(document).ready(function() {
    function displayDate() {  
    $("#currentDay").text(currentMomentDate);
};
displayDate();


calendar();
function calendar() {
    for(var i = 0; i<hours.length; i++){
    var newTimeBlock= $("<td class=time-block>");
    newTimeBlock.addClass(".time-block hour");
    newTimeBlock.text(hours[i]);
    $(".time-block").append(newRow);
    };
    for(var i=0; i<textDesc.length; i++){
        var newtextDesc = $("<td class=textarea>")
    }
    
}

});
   





















