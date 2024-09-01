let sizeButton=document.querySelector(".size-input");
let sizeInput=document.querySelector(".number-input");
let sketchBoard=document.querySelector(".sketch-board")

sizeButton.addEventListener("click", ()=>{createNewBoard()});

function removeOldBoard(){
    while(sketchBoard.firstChild){
        sketchBoard.lastChild.remove();
    }
}
function createNewBoard(){
    removeOldBoard();
    let numberOfPixels=parseInt(sizeInput.value);
    let pixelSize=960/numberOfPixels;
    console.log(pixelSize);
    for(let i=0; i<numberOfPixels*numberOfPixels; i++){
        let pixel=document.createElement("div");
        pixel.style.height=pixelSize+"px";
        pixel.style.width=pixelSize+"px";
        pixel.style["box-sizing"]="border-box";
        pixel.style.border="1px solid red";
        sketchBoard.appendChild(pixel);
        
    }
    // let allPixels=document.querySelectorAll(".sketchBoard *");

}