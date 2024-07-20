document.addEventListener('DOMContentLoaded', (event) => {
	const squares = document.querySelectorAll(".square");
	const square = document.querySelector(".square");
	let c = 1;
	const turn1 = document.querySelector("#turn1");
	const turn2 = document.querySelector("#turn2");
	let finish = false;

	if (squares) {
		
		squares.forEach(square => {
			square.addEventListener("click", () => {
				if (square.textContent === "_" && finish === false) {
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
					const diagonal1s = document.querySelectorAll(".diagonal1");
					const diagonal1 = document.querySelector(".diagonal1");
					const diagonal2s = document.querySelectorAll(".diagonal2");
					const diagonal2 = document.querySelector(".diagonal2");
					const row1s = document.querySelectorAll(".row1");
					const row1 = document.querySelector(".row1");
					const row2s = document.querySelectorAll(".row2");
					const row2 = document.querySelector(".row2");
					const row3s = document.querySelectorAll(".row3");
					const row3 = document.querySelector(".row3");
					const column1s = document.querySelectorAll(".column1");
					const column1 = document.querySelector(".column1");
					const column2s = document.querySelectorAll(".column2");
					const column2 = document.querySelector(".column2");
					const column3s = document.querySelectorAll(".column3");
					const column3 = document.querySelector(".column3");

					if (diagonal1s[0].textContent + diagonal1s[1].textContent + diagonal1s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (diagonal1s[0].textContent + diagonal1s[1].textContent + diagonal1s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (diagonal2s[0].textContent + diagonal2s[1].textContent + diagonal2s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (diagonal2s[0].textContent + diagonal2s[1].textContent + diagonal2s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (row1s[0].textContent + row1s[1].textContent + row1s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (row2s[0].textContent + row2s[1].textContent + row2s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (row3s[0].textContent + row3s[1].textContent + row3s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (row1s[0].textContent + row1s[1].textContent + row1s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (row3s[0].textContent + row3s[1].textContent + row3s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (row2s[0].textContent + row2s[1].textContent + row2s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (column1s[0].textContent + column1s[1].textContent + column1s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (column2s[0].textContent + column2s[1].textContent + column2s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (column3s[0].textContent + column3s[1].textContent + column3s[2].textContent == "XXX") {
						turn1.textContent = "You WIN!";
						finish = true;
					}
					if (column1s[0].textContent + column1s[1].textContent + column1s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (column3s[0].textContent + column3s[1].textContent + column3s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
					if (column2s[0].textContent + column2s[1].textContent + column2s[2].textContent == "OOO") {
						turn2.textContent = "You WIN!";
						finish = true;
					}
				}
		});
		});
	} else {
			console.error("Element with class 'square' not found.");
	}
});