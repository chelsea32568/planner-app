var today = dayjs();
$("#currentDay").text(today.format("dddd[,] MMMM D"));

var time = dayjs().hour();

$(".save").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

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

const rows = document.getElementsByClassName("row");
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {

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