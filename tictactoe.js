document.addEventListener('DOMContentLoaded', (event) => {
	const squares = document.querySelectorAll(".square");
	const square = document.querySelector(".square");
	let c = 1;
	const turn1 = document.querySelector("#turn1");
	const turn2 = document.querySelector("#turn2");

	if (square) {
		squares.forEach(square => {
			square.addEventListener("click", () => {
				if (c == 1) {
						square.textContent = "X";
						turn1.textContent = '';
						turn2.textContent = "Your Turn!";
						c = 2; // This should be toggled to allow switching back to player 1, consider using `c = c == 1 ? 2 : 1;`
				} else {
						square.textContent = "O";
						turn2.textContent = '';
						turn1.textContent = "Your Turn!";
						c = 1; // Correctly toggle `c` to switch turns
				}
		});
		});
	} else {
			console.error("Element with class 'square' not found.");
	}
});