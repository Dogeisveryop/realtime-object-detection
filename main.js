
status = "";
object = [];
function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();

    video =createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    
}

function start() {
    cocomodel = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelloaded() {
    console.log("Model is loaded");
    status = true ;
    
}

function gotresults(error,results) {
    if (error) {
        console.log(error);
    }
     console.log(results);
    object = results ;
}

function preload(){
 
    
}

function draw(){
    image(video,0,0,400,400);
    if (status != "") {
        r=random(255);
        g=random(255);
        b=random(255);
        cocomodel.detect(video,gotresults);
      for ( i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = " Status = Objects detected " ;
        document.getElementById("number_object").innerHTML = "Number of object detected are :"+object.length;

       fill(r,g,b);
       stroke(r,g,b);
       percent = floor(object[i].confidence*100);
       text(object[i].label+" "+percent+"%",object[i].x,object[i].y-10);
       noFill();
       rect(object[i].x,object[i].y,object[i].width,object[i].height);
      }

    }
}