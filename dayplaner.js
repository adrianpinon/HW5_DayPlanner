let id = function setPlanner() {
        console.log(setPlanner)
        //added console.log just to make sure if this is gonna work//
    $("#currentDay").text(moment().format("dddd, MMMM, YYYY", "mm", "ss"));
        //added console.log to the moment()//
            console.log(moment())
    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let schedule = localStorage.getItem(id);

        if (schedule !== null) {
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
        let schedule = $(this).siblings("schedule").val();

        localStorage.setItem(time, schedule);
            
    });

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        let thisHour = parseInt($(this).attr("id"));
                    //removed "switch" because if/else statments are easier. Note to self: don't get to fancy//
                    //also tutor said ">" this would make better sense//

        if (thisHour > hour) {
            $(this).addClass("future")
        }    
        else if
         {
            $(this).addClass("present")
        }
        else
        {
            $(this).addClass("past")
        }
    });

}

pastPresentFuture();