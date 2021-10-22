$(document).ready(function () {
  // above to make sure html and css get loaded first
  // display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // click listener for saveBtn
  $(".saveBtn").on("click", function () {
    console.log(this);
    //setting values of user input and time in local storage
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  // load data from local storage
  $("#9am.description").val(localStorage.getItem("9am"));
  $("#10am.description").val(localStorage.getItem("10am"));
  $("#11am.description").val(localStorage.getItem("11am"));
  $("#12am.description").val(localStorage.getItem("12am"));
  $("#1pm.description").val(localStorage.getItem("1pm"));
  $("#2pm.description").val(localStorage.getItem("2pm"));
  $("#3pm.description").val(localStorage.getItem("3pm"));
  $("#4pm.description").val(localStorage.getItem("4pm"));
  $("#5pm.description").val(localStorage.getItem("5pm"));
});
