function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM, YYYY"));
    //added console.log to the moment()//
    console.log(moment())
    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let schedule = localStorage.getItem(id);

        if (schedule !== null) {
            //I got the idea to "()schedule !==null" from https://stackoverflow.com/questions/6424094/how-to-define-do-nothing-in-javascript//
            // instead of running a for loop - it made better sense to say if the schdule is null then run the $(this)
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();
let saveBtn = $(".saveBtn");
console.log("is this one working" + saveBtn)
//added console.log just to see if something would appear// 
saveBtn.on("click", function () {

    let time = $(this).parent().attr("id");
    let schedule = $(this).siblings(".schedule").val().trim();
    //added ".trim()" tutor wanted me add this//

    localStorage.setItem(time, schedule);
    setPlanner()

});

function pastPresentFuture() {
    console.log("is pastPresentFuture working")
    hour = moment().hours();
    console.log(hour)

    $(".time-block").each(function () {
        let thisHour = parseInt($(this).attr("id"));
        //removed "switch" because if/else statements are easier. Note to self: don't get to fancy//
        //also tutor said ">" would make better sense//
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        //tutor helped with ""thisHour === hour"
        else if (thisHour === hour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("past")
        };
    });
}
pastPresentFuture();