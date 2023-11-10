// Display the current day at the top of the calender when a user opens the planner - Could add the 'th' (work out how to do this)
var today = dayjs();
$("#currentDay").text(today.format("dddd[,] MMMM D"));


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page