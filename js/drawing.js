const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// canvas set up
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

function fillCanvas(event) {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function stopDrawing(event) {
    drawing = false;
}

function releaseMouse(event) {
    stopDrawing();
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

// handle events
if (canvas) {
    canvas.addEventListener("mousemove", traceOffset);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", releaseMouse);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("click", fillCanvas);
}
