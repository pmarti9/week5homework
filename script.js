// create a table - displays hours and save buttons. open text row to input information
//input rows to store into local storage when save is pressed. change colors of each row based on time (past, present and future)
//individual inputs for each time block
//display current date at the top
//Global Variables

var currentMomentDate = moment().format("MMM Do YY"); 


//functions
$(document).ready(function() {
    function displayDate() {  
    $("#currentDay").text(currentMomentDate);
 console.log(this);
};
displayDate();


calendar();
function calendar() {
    var tableCalendar = $("<table>");
    var tableday = $("<tr>");

    
}


















});
   





















