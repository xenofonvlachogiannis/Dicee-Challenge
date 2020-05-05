var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
function randomImage(){
    document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1 +".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2 +".png");
}

function winners(){
    if (randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 Wins! 🎈"
    }
    else if (randomNumber1===randomNumber2){
        document.querySelector("h1").textContent="Draw! 🎇"
    }
    else{
        document.querySelector("h1").textContent="🎈 Player 2 Wins!"
    }
}

function reload (){
    randomImage();
    winners();
}

reload();
