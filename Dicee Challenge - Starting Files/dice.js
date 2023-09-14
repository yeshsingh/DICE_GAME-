var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var randomDice="dice" + random1 + ".png";
var randomDice1="images/" + randomDice;
var randomDice2="images/dice" + random2 + ".png";
var v1=document.querySelectorAll("img")[0];
var v2=document.querySelectorAll("img")[1];
v1.setAttribute("src",randomDice1);
v2.setAttribute("src",randomDice2);

if(random2>random1)
{
    document.querySelector("h1").innerHTML = "Player 2 WINS! 🚩";
}
else if(random1!=random2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";
}
else 
{
    document.querySelector("h1").innerHTML = "DRAW!";
}
