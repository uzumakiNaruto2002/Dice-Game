function rNG(){
    var randNum = Math.random();
    randNum *= 6;
    randNum = Math.floor(randNum);
    randNum++;
    return randNum;
}

var randNum1 = rNG();
var randNum2 = rNG();

var x = "images/dice"+ randNum1 + ".png";
var y = "images/dice"+ randNum2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", x);
image2.setAttribute("src", y);

if(randNum1 > randNum2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randNum1 < randNum2){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}

