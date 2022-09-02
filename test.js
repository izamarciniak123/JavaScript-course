var colourChanger = document.getElementById("colour-changer");
var colour = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColour(){

    if(counter >= colour.length){

        counter = 0;

    }

    colourChanger.style.background = colour[counter];
    counter++;

}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";

};
