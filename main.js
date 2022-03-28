 img = "";
 status ="";

function setup(){

    canvas = createCanvas(490, 450);
    canvas.center();
    objectDetector = m15.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function preload(){
    img = loadImage("my pic.jpg");
}

function draw(){

image(img ,0,0,490,450);

fill("#E81313");
text("Cat" , 45 , 75);
noFill();
stroke("#E81313");
rect(30,60,300,450);

fill("#E81313");
text("Pig, 255 , 75");
noFill();
stroke("#E81313");
rect(240,60,210,450)
}

function modelLoaded(){
    console.log("Model is initialized!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);

}
console.log(results);
}



