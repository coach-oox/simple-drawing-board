const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const optionBtn = document.querySelector(".option");
const saveBtn = document.querySelector(".save");
const color = document.getElementsByClassName("color");
const range = document.querySelector(".range");

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const DEFAULT_COLOR = "#2980b9";

let drawing = false;
let filling = false;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

// ? palette

function changeBrushSize(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function changeColor(event) {
    const picked = event.target.style.backgroundColor;
    ctx.strokeStyle = picked;
    ctx.fillStyle = picked;
}

// ? buttons

function optionBtnClick(event) {
    if (filling) {
        filling = false;
        optionBtn.innerText = "Fill";
    } else {
        filling = true;
        optionBtn.innerText = "Line";
    }
}

function saveBtnClick(event) {
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.download = "@coach-oox/simple-drawing-board";
    link.click();
}

// ? drawing

function fillCanvas(event) {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function stopDrawing(event) {
    drawing = false;
}

function startDrawing(event) {
    drawing = true;
}

function traceOffset(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!drawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function main() {
    // * drawing
    canvas.addEventListener("mousemove", traceOffset);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("click", fillCanvas);

    // * buttons
    optionBtn.addEventListener("click", optionBtnClick);
    saveBtn.addEventListener("click", saveBtnClick);

    // * palette
    range.addEventListener("input", changeBrushSize);
    Array.from(color).forEach((color) => {
        color.addEventListener("click", changeColor);
    });
}

main();
