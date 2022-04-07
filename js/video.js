var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
		console.log("Pause Video");
		video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down Video");
	video.playbackRate *= 0.95;
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up Video");
	video.playbackRate /= 0.95;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead Video");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) 
		video.currentTime = 0;
	console.log("Video current time is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	if (document.querySelector("#mute").innerHTML == "Mute")
		console.log("Mute Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	
		if (document.querySelector("#mute").innerHTML == "Unmute")
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	// console.log(document.querySelector("mute").innerHTML)
	// document.querySelector("#volume").innerHTML = video.volume * 0 + "%";

});