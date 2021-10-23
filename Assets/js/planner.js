$(document).ready(function () {
  // above to make sure html and css get loaded first
  // display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // click listener for saveBtn
  $(".saveBtn").on("click", function () {
    console.log(this);
    //setting values of user input and time in local storage - content gets copied into the save button
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); // need to go 1 level up to get to id

    localStorage.setItem(time, text);
  });

  // load (saved) data from local storage
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12am .description").val(localStorage.getItem("12am"));
  $("#13pm .description").val(localStorage.getItem("13pm"));
  $("#14pm .description").val(localStorage.getItem("14pm"));
  $("#15pm .description").val(localStorage.getItem("15pm"));
  $("#16pm .description").val(localStorage.getItem("16pm"));
  $("#17pm .description").val(localStorage.getItem("17pm"));

  function trackHour() {
    var currentHour = moment().hour(); // gets the current hour

    // loop over all the hours and check if it is past/present/future hour
    $(".time-block").each(function () {
      var rowHourAm = parseInt($(this).attr("id").split(["am"])[0]); // splits the string by "am"
      var rowHourPm = parseInt($(this).attr("id").split(["pm"])[0]); // splits the string by "pm"
      console.log(rowHourAm, currentHour);
      console.log(rowHourPm, currentHour);

      // give the colorings:

      if (rowHourAm < currentHour || rowHourPm < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (rowHourAm === currentHour || rowHourPm === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }
  trackHour();
});
