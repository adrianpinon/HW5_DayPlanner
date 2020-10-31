# HW5_DayPlanner


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Work Day Scheduler</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead"></p>
    </header>

    
    <div class="container">
      <!-- Timeblocks go here -->
     <div class="row time-block" id="9">
        <div class="col-1 hour">9 AM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="10">
        <div class="col-1 hour">10 AM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="11">
        <div class="col-1 hour">11 AM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="12">
        <div class="col-1 hour">12 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="13">
        <div class="col-1 hour">1 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="14">
        <div class="col-1 hour">2 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="15">
        <div class="col-1 hour">3 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="16">
        <div class="col-1 hour">4 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
      <div class="row time-block" id="17">
        <div class="col-1 hour">5 PM</div>
        <textarea class="col-10 schedule"></textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script>src="dayplaner.js"</script>
  </body>
</html>


dayPlaner

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