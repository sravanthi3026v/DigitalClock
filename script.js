function showTime(){
    var date = new Date();
    var hour = date.getHours();    
    var minute = date.getMinutes();    
    var second = date.getSeconds();    
    var session = "AM";
//making 12 hours format
    if(hour == 0){
        hour = 12;
    }
    if (hour>12){
        hour = hour-12;
        session = "PM";
    }
    if(hour==12){
        session="PM";
    }
    hour = (hour<10)?"0"+hour:hour;
    minute = (minute<10)?"0"+minute:minute;
    second = (second<10)?"0"+second:second;

    document.getElementById("DigitalClock").innerHTML = hour + ":" + minute +
     ":" + second + " " + session;

    setTimeout(showTime, 1000);
}
showTime();
