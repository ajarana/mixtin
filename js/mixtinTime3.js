$(function(){
	var now = new Date();
	var past = new Date("November 22, 2016 00:00:00");

	var difference = now.getTime() - past.getTime();

	var days = Math.floor(difference/86400000); //1000ms*60s*60m*24h
	var arrayLength = document.getElementsByClassName("theTime").length;

	for (i=0, k=1; i < arrayLength || k < arrayLength; i+=2, k+=2) {
		document.getElementsByClassName("theTime")[i].innerHTML = ((i*3)/2) + days + "&nbsp;" + "days ago";		
		document.getElementsByClassName("theTime")[k].innerHTML = (((k*3)+1)/2) + days + "&nbsp;" + "days ago";		
	}
});
