/**
 * =================================
 *  mouse on card
 * 	credit codepin (https://codepen.io/ravisridhar55/pen/poeyJKQ?editors=0010)
 * =================================
 * */

// const card = document.querySelector(".card");
// const boxRect = card.getBoundingClientRect();

// card.addEventListener("mousemove", (e) => {
// 	const xPosition = (e.clientX - boxRect.left) / boxRect.width;
// 	const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.2;
// 	const xOffset = -(xPosition - 0.2);
// 	const dxNorm = Math.min(Math.max(xOffset, -0.2), 0.2);
// 	card.style.transform = `perspective(1000px) rotateY(${
// 		dxNorm * 45
// 	}deg) rotateX(${yPosition * 45}deg)`;
// });

// card.addEventListener("mouseleave", () => {
// 	card.style.transform = "none";
// });
