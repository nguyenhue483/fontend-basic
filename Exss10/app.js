// Bài 1

// const btn = document.getElementById("btn");
// const div = document.getElementById("div");

// console.log(btn)
// console.log(div);

// btn.onclick = function() {
//     if (div.style.visibility === 'hidden') {
//         div.style.visibility = 'visible';
//     } else {
//         div.style.visibility = 'hidden';
//     }

// }


// Bài 2

// const btn = document.getElementById("btn");
// const div = document.getElementById("div");
// console.log(btn);
// console.log(div);

// colors = ['blue', 'aqua', 'green', 'pink', 'yellow', 'purple'];

// btn.addEventListener("click", function() {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     div.style.backgroundColor = randomColor;
// });


// Bài 3

// const btn = document.getElementById("btn");
// const div = document.getElementById("div");
// const div1 = document.getElementById("divv");

// btn.onclick = function() {
//   if (div.innerHTML === "Có hai đứa nhóc đang chơi trốn tìm.") {
//       div.innerHTML = 'Tìm hoài tìm mãi nên quên lối về.'
//     } else {
//     div.innerHTML = 'Có hai đứa nhóc đang chơi trốn tìm.'
//   }

//   if (div1.innerHTML === "Tìm hoài tìm mãi nên quên lối về.") {
//     div1.innerHTML = 'Có hai đứa nhóc đang chơi trốn tìm.'
//     } else {
//     div1.innerHTML = 'Tìm hoài tìm mãi nên quên lối về.'
// }
// } 



// Bài 4

// C1

// const btn = document.getElementById("btn");
// const div = document.getElementById("div");

// var size = 14;

// btn.onclick = function() {
//     size = size + 1;
//     div.style.fontSize = size + "px";
// }

// C2

// div.style.fontSize = '14px';

// btn.onclick = function() {
//     txt = document.getElementById('div');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 1) + 'px';
// }


