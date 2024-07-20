document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll(".square");
	const turn1 = document.querySelector("#turn1");
	const turn2 = document.querySelector("#turn2");
	let currentPlayer = 1;
	let finish = false;

	if (squares.length > 0) {
		squares.forEach(square => {
			square.addEventListener("click", () => {
				if (square.textContent === "_" && !finish) {
					square.textContent = currentPlayer === 1 ? "X" : "O";
					turn1.textContent = currentPlayer === 1 ? "" : "Your Turn!";
					turn2.textContent = currentPlayer === 1 ? "Your Turn!" : "";
					currentPlayer = currentPlayer === 1 ? 2 : 1;
					checkWin();
				}
			});
		});
	} else {
		console.error("Element with class 'square' not found.");
	}

	function checkWin() {
		const lines = [
			[0, 1, 2], // rows
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6], // columns
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8], // diagonals
			[2, 4, 6]
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			const lineSquares = [squares[a], squares[b], squares[c]];
			const lineText = lineSquares.map(square => square.textContent).join("");

			if (lineText === "XXX") {
				turn1.textContent = "You WIN!";
				finish = true;
				break;
			} else if (lineText === "OOO") {
				turn2.textContent = "You WIN!";
				finish = true;
				break;
			}
		}
	}
});
