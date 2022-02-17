var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
console.log(recognition);

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    say();
}
function say()
{
    var synth=window.speechSynthesis;
    speak_value=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(speak_value);
    synth.speak(utter);
    Webcam.attach("#camera");
}

Webcam.set({
    height:350,
    width:400,
    image_format:"png",
    png_quality:100
});
cam=document.getElementById("camera");