const optionBtn = document.querySelector(".option");
const saveBtn = document.querySelector(".save");

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

if (optionBtn) {
    optionBtn.addEventListener("click", optionBtnClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", saveBtnClick);
}
