
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];

const d = new Date();
const month = months[d.getMonth()];


const day = days[d.getDay()];	

const date =  month +" "+ d.getDate()+" "+d.getFullYear();

//Display current date
document.getElementById("cal-day").innerHTML = day;
document.getElementById("cal-date").innerHTML = date;


//Display current time in 12-hour format
function getCurrentTime()
{
    var currentTime    = new Date();
    var hour   = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var ap = "AM";
    if (hour   > 11) { ap = "PM";             }
    if (hour   > 12) { hour = hour - 12;      }
    if (hour   == 0) { hour = 12;             }
    if (hour   < 10) { hour   = "0" + hour;   }
    if (minute < 10) { minute = "0" + minute; }
    if (second < 10) { second = "0" + second; }
    var timeString = hour + ':' + minute + ':' + second + " " + ap;
    return timeString;
 }