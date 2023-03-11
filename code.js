let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el");

function getRandomCard(){
    //ACE=11
    //K,Q,J=10
let randomNum=Math.floor(Math.random()*13)+1;
if(randomNum===1){
return 11;
}
else if(randomNum>10){
    return 10;
}
else {
return randomNum;
}
}

function startGame(){
    isAlive=true;
    let cardOne=getRandomCard();
    let cardTwo=getRandomCard();
    cards=[cardOne,cardTwo];
    sum=cardOne+cardTwo;

    renderGame();
}
function renderGame(){
if(sum<21){
    message="Do u want a new card?";
    
}
else if(sum===21){
    message="Wohooo blackjack!!!!";
    hasBlackJack=true;
}
else{
    message="Sorry u lost :(";
    isAlive=false;
}
cardsEl.textContent="Cards: ";
for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i] + " ";
}
messageEl.textContent=message;
sumEl.textContent="Sum: " + sum;

}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}
let player={
    name:"Per",
    chips:150
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + " :$"+ player.chips;