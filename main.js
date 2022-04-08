var Dog= 0;
var Cat= 0;
var Duck= 0;


function startApp() {
    navigator.mediaDevices.getUserMedia({audio:true});
myModel=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7QEpy5soU/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("Model is loaded")
    myModel.classify(getResult);
}

function getResult(errorsArray, resultsArray) {
    if (errorsArray) {
        console.error(errorsArray);
    }

    else {
        console.log(resultsArray);
        document.getElementById("resultH2").innerHTML=resultsArray[0].label;
        imageTag= document.getElementById("animal");
        soundName= resultsArray[0].label;

        if (soundName=="Dog") {
            imageTag.src="dog.gif";
        }

        if (soundName=="Cat") {
            imageTag.src="Cat.gif";
        }

        if (soundName=="Duck") {
            imageTag.src="duck.gif";
        }

        
        
    }
}

