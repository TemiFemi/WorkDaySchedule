// Using JQuery to display the text for the date
var presentTime = moment().format('dddd,MMMM Do YYYY');
$("#currentDay").text(presentTime);
var presentHour = moment().hour();
var workHour = [9, 10, 11, 12, 13, 14, 15, 16, 18];

// *On click, user should be able to enter information in that time block (input/text area element)

// *On click of the save button, user should be able to save the information the entered in the time block field (input/text area)
$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        /*
        <div id="11" class="row"> = div on line 18 parent = $(this).parent().parent()
            <div class="col-md-7">
                <textarea id="text-11" class="description"></textarea>
            </div>
            <div class="col-md-3"> = buttons parent = $(this).parent()
    $(this) = <button id="button-11" class="saveBtn btn btn-primary">Save</button>
            </div>
        </div>
        */
        var outerDiv = $(this).parent().parent() // Getting the button's parent() parent()
        var userentry = outerDiv.find(".description").val() // finding the text area with a class of description that inside the outerdiv
        var blockTime = outerDiv.attr("id"); // Getting the attritube of the outerDiv
        console.log(blockTime, userentry);
        localStorage.setItem(blockTime, userentry)
    })


    // for loop to display the timeblock and it being color coded to indicate whether it is in the past, present, or future
    for (let i = 9; i < 19; i++) {
        console.log(localStorage.getItem(i))
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
})
