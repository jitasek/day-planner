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
});
