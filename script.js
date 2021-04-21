// Using JQuery to display the text for the date
var presentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(presentTime);
var presentHour = moment().hour();
var workHour = [9, 10, 11, 12, 13, 14, 15, 16, 18];

// *On click, user should be able to enter information in that time block (input/text area element)
$(".saveBtn").on("click", function () {
    var blockTime = $(this).attr("id").split("-")[2]
    var userentry = $("#text-" + blockTime).val()
    console.log(blockTime, userentry);
    localStorage.setItem(blockTime, userentry)
})

for (let i = 9; i < 19; i++) {
    $("#text-" + i).val(localStorage.getItem(i))
    if (presentHour > i) {
        $("#text-" + i).addClass("past")
    }
    else if (presentHour == i) {
        $("#text-" + i).addClass("present")
    }
    else {
        $("#text-" + i).addClass("future")
    }
}