const cards=["queen","queen","king","king"];
let cardsInPlay=[];
let cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User filpped Queen");
let cardTwo=cards[1];
cardsInPlay.push(cardTwo);
console.log("User filpped king");
if(cardsInPlay.length===2)
{
	if(cardsInPlay[0]===cardsInPlay[1])
		alert("You found a match!");
	else
		alert("Sorry Try again");

}