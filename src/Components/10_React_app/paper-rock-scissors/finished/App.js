import React, { useEffect, useState } from 'react';
import './App.css';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';

//---------------- 1 start ----------------
//losesTo-ի արժեք ցույց է տալիո թե ում է պարտվում (2 --> պարտվում է id: 2-ով օբյեկտին) է, որը պարզեցնում է հաղթողի ընտրության հարցը > կամ < ստուգումով
const choices = [
	{ id: 1, name: 'rock', component: Rock, losesTo: 2 },
	{ id: 2, name: 'paper', component: Paper, losesTo: 3 },
	{ id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];

export default function App() {
	//---------------- 2 start ----------------
	// պարտություն-հաղթանակ հաշվարկի համար
	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);
	const [gameState, setGameState] = useState(null); // win, lose, draw
	//---------------- 2 end ----------------

	//տես console--> components-ում փոխվող 'state'-ը
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);

	useEffect(() => {
		// համակարգչի պատահական ընտրության համար 

		const randomChoce = choices[Math.floor(Math.random() * choices.length)];
		// պահվում է առանձին 'state'-ում՝ [userChoice]
		setComputerChoice(randomChoce)

	}, [])

	// and add onclick in button
	//ըստ id-ի ընտրում ենք օբյեկտը
	function handleUserChoice(choice) {
		const chosenChoice = choices.find(c => c.id === choice);
		setUserChoice(chosenChoice);

		if (chosenChoice.losesTo === computerChoice.id) {
			// lose
			setLosses(losses => losses + 1);
			setGameState('lose');
		} else if (computerChoice.losesTo === chosenChoice.id) {
			// win
			setWins(wins => wins + 1);
			setGameState('win');
		} else if (computerChoice.id === chosenChoice.id) {
			// draw
			setGameState('draw');
		}
	}
	//---------------- 1 end ----------------

	// Ֆունկցիա, որը ստանալով մեր և համակարգչի ընտրության  ՛id՛ արգումենտը, 
	//"choices" զանգվածի համապատասխան էլեմենտը վերցնում, սարքում է կոմպոնենտ և վերադարձնում է մեզ ՛return՛-ում
	function renderComponent(choice) {
		const Component = choice.component; // Paper, Rock, Scissors
		return <Component />;
	}

// Ֆունկցիա, որը խաղը սկսում է նորից
	function restartGame() {
		setGameState(null);
		setUserChoice(null);

		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
	}

	useEffect(() => {
		restartGame();
	}, []);

	return (
		<div className="app">
			{/* տեղեկատվությունը գրվում է այստեղ */}
			<div className="info">
				<h2>Rock. Paper. Scissors</h2>
					{/* ՀԱՆՁՆԱՐԱՐՈՒԹՅՈՒՆ ԱՌԱՆՁՆԱՑՆԵԼ ՍԱՐՔԵԼ ԱՌԱՆՁԻՆ 'component'- ներ */}
				{/* wins vs losses վիճակագրություն */}
				<div className="wins-losses">
					<div className="wins">
						<span className="number">{wins}</span>
						<span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
					</div>

					<div className="losses">
						<span className="number">{losses}</span>
						<span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
					</div>
				</div>
			</div>

			{/*  win/loss/draw պատուհան */}
			{/*կախված ՛gameState՛-ի արժեքից ունենք դինամիկ փոփոխվող կլասով դիվ
	  որի 'css' կաննոները նաղապես գրված են */}
			{gameState && (
				<div
					className={`game-state ${gameState}`}
					onClick={() => restartGame()} 
				>
					<div>
						{/* ԻՄ ԸՆՏՐՈՒԹՅՈՒՆ | MESSAGE | Հ․ԸՆՏՐՈՒԹՅՈՒՆ */}
						<div className="game-state-content">
							<p>{renderComponent(userChoice)}</p>
							{/* <p>you {gameState}!</p> */}

							{gameState === 'win' && <p>Congrats! You won!</p>}
							{gameState === 'lose' && <p>Sorry! You lost!</p>}
							{gameState === 'draw' && <p>You drew!</p>}

							<p>{renderComponent(computerChoice)}</p>
						</div>

						<button onClick={() => restartGame()}>Play Again</button>
					</div>
				</div>
			)}

			<div className="choices">
				{/* ընտրության վերնագրեր*/}
				<div>You</div>
				<div />
				<div>Computer</div>

				{/* Մեր ընտրության կորաճակները */}
				<div>
					<button className="rock" onClick={() => handleUserChoice(1)}>
						<Rock />
					</button>
					<button className="paper" onClick={() => handleUserChoice(2)}>
						<Paper />
					</button>
					<button className="scissors" onClick={() => handleUserChoice(3)}>
						<Scissors />
					</button>
				</div>

				<div className="vs">vs</div>

				{/* Ցույց ենք տալիս համակարգչի ընտրությունը */}
				<div>
					<button className="computer-choice">?</button>
				</div>
			</div>
		</div>
	);
}
