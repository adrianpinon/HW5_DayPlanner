let hours = [
  "9, 10 , 11, 12, 1, 2, 3, 4, 5"
];
let classEL = $("hour");


//let hour9 = $("#9");
//let hour10 = $("#10");
//let hour11 = $("#11");
//let hour12 = $("#12");
//let hour1 = $("#13");
//let hour2 = $("#14");
//let hour3 = $("#15");
//let hour4 = $("#16");
//let hour5 = $("#17");
//let time = moment();



let id = function setPlanner() {
        console.log(setPlanner)
        //added console.log just to make sure if this is gonna work//
    $("#currentDay").text(moment().format("dddd, MMMM, YYYY"));
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

        switch (thisHour); {
            $(this).addClass("future");
        }    
        //else if// 
         {
            $(this).addClass("today");
        }
        //else// 
        {
            $(this).addClass("past");
        }
    });

}

pastPresentFuture();