const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color")
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;


function onMove(event){
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
    ctx.beginPath(); // width range등의 적용을 받지 않기 위해 한 번 끊어줌.
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    //console.dir(event.target.dataset.color);
    const colorValue = event.target.dataset.color 
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting); //another way : document.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);



lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange)

colorOptions.forEach(color => color.addEventListener("click", onColorClick))