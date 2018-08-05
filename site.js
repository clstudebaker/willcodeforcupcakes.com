window.onload = greeting;

function greeting() {
	document.getElementById("content").innerHTML="This is my onload greeting but I have nothing clever to say so this is it.";
	/*moved this to a p tag on index page within primary div*/
}


function about() {
	document.getElementById("content").innerHTML="I am me. I am learning gitkraken.";
}



function contact() {
	document.getElementById("content").innerHTML="clstudebaker@gmail.com";
}


/* this is the links to the projects */
function projects() {
	document.getElementById("content").innerHTML="<p>Projects</p><p><a href=\"https://s3-us-west-1.amazonaws.com/willcodeforcupcakes.com/calculator.html\">Calculator (and yes, I get that this is sort of incomplete)</a></p><p>Nothing to link you to</p><p>Nothing to link you to here either</p><p>Seriously, just be patient</p>";
	/*<p><a href=\"https://s3-us-west-1.amazonaws.com/willcodeforcupcakes.com/littlelucky.html\">I <3 Mandopop</a></p>*/
}

/*THIS IS THE JS FOR THE CLOCK, added to main page*/
setInterval(function()	{
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var period = "AM";
if (hours>= 12){
	period="PM";
}
if (hours>12) {
	hours=hours-12;
}
if (seconds <10){
	seconds="0"+seconds;
}
if (minutes<10){
	minutes="0"+minutes;
}
var clockTime = "Your local time is: "+hours+":"+minutes+":"+seconds+" "+period;
var clock=document.getElementById('clock');
clock.innerText=clockTime;
}, 1000);
/* this is where the clock JS ends */