const cards=["queen","queen","king","king"];
let cardsInPlay=[];
function checkForMatch()
{
	if(cardsInPlay[0]===cardsInPlay[1])
	{
		console.log(" You found a Match !");
	}
		else
		{
			console.log("Sorry Try Again");
		}
	
};

function flipCard(cardId)
{

console.log("User flipped "+ cards[cardId]);
cardsInPlay.push(cards[cardId]);

};

flipCard(0);
flipCard(1);
checkForMatch();

// if(cardsInPlay.length===2)
// {
// 	if(cardsInPlay[0]===cardsInPlay[1])
// 		alert("You found a match!");
// 	else
// 		alert("Sorry Try again");
// }

// let cardOne=cards[0];
// cardsInPlay.push(cardOne);
// console.log("User filpped Queen");
// let cardTwo=cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User filpped king");
// if(cardsInPlay.length===2)
// {
// 	if(cardsInPlay[0]===cardsInPlay[1])
// 		alert("You found a match!");
// 	else
// 		alert("Sorry Try again");

// }