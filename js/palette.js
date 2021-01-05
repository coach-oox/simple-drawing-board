const color = document.getElementsByClassName("color");
const range = document.querySelector(".range");

function changeBrushSize(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function changeColor(event) {
    const picked = event.target.style.backgroundColor;
    ctx.strokeStyle = picked;
    ctx.fillStyle = picked;
}

if (range) {
    range.addEventListener("input", changeBrushSize);
}

if (color) {
    Array.from(color).forEach((color) => color.addEventListener("click", changeColor));
}
