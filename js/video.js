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
	if (btn.value == "Mute") {
		console.log("Mute Video");
		video.muted = true;
		btn.value == "Unmute";
		return;
	}
	else {
		console.log("Unmute Video");
		video.muted = false;
		btn.value == "Mute";
		return;
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	var slider = document.querySelector("#slider");
	console.log("Slider volume slider");
	if (slider.value < 100) {
		video.volume = slider.value / 100; 
		document.getElementById("volume").textContent = slider.value + "%";
		console.log("Volume of the video is ", slider.value)
	}
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School Video");
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original Video");
	video.className = "video";
});