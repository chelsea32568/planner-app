// Display the current day at the top of the calender when a user opens the planner - Could add the 'th' (work out how to do this)
var today = dayjs();
$("#currentDay").text(today.format("dddd[,] MMMM D"));
