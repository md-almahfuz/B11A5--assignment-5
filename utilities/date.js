
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];

const d = new Date();
const month = months[d.getMonth()];


const day = days[d.getDay()];	

const date =  month +" "+ d.getDate()+" "+d.getFullYear();

//console.log(d.getDay());
document.getElementById("cal-day").innerHTML = day;
document.getElementById("cal-date").innerHTML = date;