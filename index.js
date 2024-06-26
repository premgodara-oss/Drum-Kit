var btnlen=document.querySelectorAll(".drum").length;
for(var i=0; i<btnlen;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      //indentity button using this and getting this inner html
        var buttoninnerhtml=this.innerHTML;
        makesound(buttoninnerhtml);
        animationbutton(buttoninnerhtml);
    //     switch(buttoninnerhtml){
    //         case "w":
    //             // alert("running");
    //             var audf=new Audio("sounds/tom-1.mp3");
    //             audf.play();
    //             this.style.color="red";
    //             break; 
    //         case "a":
    //             var auda=new Audio("sounds/tom-2.mp3");
    //             auda.play();
    //             break;
    //         case "s":
    //             var auds=new Audio("sounds/tom-3.mp3");
    //             auds.play();
    //             break; 
    //         case "d":
    //             var audd=new Audio("sounds/tom-4.mp3");
    //             audd.play();
    //             break;
    //         case "j":
    //             var audj=new Audio("sounds/snare.mp3");
    //             audj.play();
    //             break;
    //         case "k":
    //             var audk=new Audio("sounds/kick-bass.mp3");
    //             audk.play();
    //             break; 
    //         case "i":
    //             var audi=new Audio("sounds/crash.mp3");
    //             audi.play();
    //             break; 
    //         default:console.log (buttoninnerhtml);  
    // }
 } ) ;
    }
//////////// Detecting Key presss///////

document.addEventListener("keypress", function(event){
    makesound(event.key);
    animationbutton(event.key);

});

function makesound(key){
    switch(key){
        case "w":
            // alert("running");
            var audf=new Audio("sounds/tom-1.mp3");
            audf.play();
            this.style.color="red";
            break; 
        case "a":
            var auda=new Audio("sounds/tom-2.mp3");
            auda.play();
            break;
        case "s":
            var auds=new Audio("sounds/tom-3.mp3");
            auds.play();
            break; 
        case "d":
            var audd=new Audio("sounds/tom-4.mp3");
            audd.play();
            break;
        case "j":
            var audj=new Audio("sounds/snare.mp3");
            audj.play();
            break;
        case "k":
            var audk=new Audio("sounds/kick-bass.mp3");
            audk.play();
            break; 
        case "i":
            var audi=new Audio("sounds/crash.mp3");
            audi.play();
            break; 
        default:console.log (buttoninnerhtml);  
}
}
// animation 
function animationbutton(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
