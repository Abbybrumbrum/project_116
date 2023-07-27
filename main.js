function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jdoAPoJAY/model.json', ( probabilityThreshold: 0.7 ) ,modelReady);
}

function