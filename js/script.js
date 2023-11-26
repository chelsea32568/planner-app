// Display the current day at the top of the calender when a user opens the planner - Could add the 'th' (work out how to do this)
var today = dayjs();
$("#currentDay").text(today.format("dddd[,] MMMM D"));

var time = dayjs().hour();
console.log(time);

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Save the event in local storage when the save button is clicked in that timeblock.
$(".save").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

//load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
    localStorage.setItem(time, text);
})
// Persist events between refreshes of a page
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));

// Set the colour of the planner depending on the current time
const rows = document.getElementsByClassName("row");
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color based on this
    if (time === rowHour) {
      setColor(row, "red");
    } else if (time < rowHour) {
      setColor(row, "green");
    } else if (time > rowHour) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});
function setColor(element, color) {
  element.style.backgroundColor = color;
}