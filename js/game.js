var scores, roundScore, activePlayer;

startGame();

document.getElementById('dice').style.display = 'none';

document.getElementById('roll').addEventListener('click', function(){

	if (scores[activePlayer]<100){
var dice = Math.floor(Math.random() * 6 + 1);
document.getElementById('dice').style.display = 'block';
document.getElementById('dice').src = 'img/dice-' + dice + '.png';

if (dice !==1){
	roundScore += dice;
	document.getElementById('current-' + activePlayer).innerHTML = roundScore;
} else {
	Hold();
}
}
});

document.getElementById('hold').addEventListener('click', function(){

scores[activePlayer] += roundScore;

if (scores[activePlayer]>=100){
	document.getElementById('player' + activePlayer).innerHTML = 'Winner';
} else {
	document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];
	Hold();
}	
});

document.getElementById('newgame').addEventListener('click', startGame);

function Hold(){
	document.getElementById('current-' + activePlayer).innerHTML = 0;
	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
}

function startGame(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	document.getElementById('dice').style.display = 'none';
	document.getElementById('score-0').innerHTML = 0;
	document.getElementById('score-1').innerHTML = 0;
	document.getElementById('current-0').innerHTML = 0;
	document.getElementById('current-1').innerHTML = 0;
	document.getElementById('player0').innerHTML = 'Player 1';
	document.getElementById('player1').innerHTML = 'Player 2';
}