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
	var btn = document.getElementById("mute");
	if (btn.innerText == "Mute") {
		video.muted = true;
		console.log("Mute Video");
		btn.innerText = "Unmute";
	}
	else {
		
		video.muted = false;
		console.log("Unmute Video");
		btn.innerText = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", (e) => {
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool";
	console.log("Old School Video");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";
	console.log("Original Video");
});