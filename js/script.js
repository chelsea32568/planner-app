// Display the current day at the top of the calender when a user opens the planner - Could add the 'th' (work out how to do this)
var today = dayjs();
$("#currentDay").text(today.format("dddd[,] MMMM D"));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Save the event in local storage when the save button is clicked in that timeblock.
$(".save").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

//load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
    localStorage.setItem(time, text);
})
// Persist events between refreshes of a page
$("#time7 .description").val(localStorage.getItem("time7"));
$("#time8 .description").val(localStorage.getItem("time8"));
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time1 .description").val(localStorage.getItem("time1"));
$("#time2 .description").val(localStorage.getItem("time2"));
$("#time3 .description").val(localStorage.getItem("time3"));
$("#time4 .description").val(localStorage.getItem("time4"));
$("#time5 .description").val(localStorage.getItem("time5"));
$("#time6 .description").val(localStorage.getItem("time6"));


