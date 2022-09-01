var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textBox = document.getElementById("textBox");
function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = content;

    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textBox").value;
    var anterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(anterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});