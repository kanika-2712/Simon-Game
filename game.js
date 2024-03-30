var gamePattern=[];
var userClickedPattern=[];
var level=0;
var buttonColours=["red","blue","green","yellow"];
var started=false;



$(document).keypress(function(){

    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
    //$("#level-title").text("Level "+level);
    
});


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    var audio=new Audio("sounds/"+userChosenColour+".mp3");
    audio.play();
    
   // $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
   
    

});





function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
    
        if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){
        nextSequence();
    },1000);
    }
}
else{
    $("#level-title").text("Game Over ,Press Any Key to Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    startOver();
}



    
}



function nextSequence(){
    userClickedPattern=[];

level++; 
$("#level-title").text("Level "+level);
var randomNumber=Math.floor(Math.random()*4);


var randomChosenColour=buttonColours[randomNumber];

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio= new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();
gamePattern.push(randomChosenColour);

}

function startOver(){
level=0;
gamePattern=[];
started=false;

}




function animatePress(currentColour){
    var delay=100;
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){

    

    $("#"+currentColour).removeClass("pressed");
    },delay);


}

