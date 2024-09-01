let sizeButton=document.querySelector(".size-input");
let sizeInput=document.querySelector(".number-input");
let sketchBoard=document.querySelector("#canvas");


sizeButton.addEventListener("click", ()=>{createNewBoard()});
function removeOldBoard(){
    while(sketchBoard.firstChild){
        sketchBoard.lastChild.remove();
    }
}
function createNewBoard(){
    removeOldBoard();
    let numberOfPixels=parseInt(sizeInput.value);
    if(numberOfPixels>64){
        numberOfPixels=64;
    }
    let pixelSize=960/numberOfPixels;
    for(let i=0; i<numberOfPixels*numberOfPixels; i++){
        let pixel=document.createElement("div");
        pixel.style.height=pixelSize+"px";
        pixel.style.width=pixelSize+"px";
        pixel.style["box-sizing"]="border-box";
        pixel.style.border="1px solid black";
        sketchBoard.appendChild(pixel);
        pixel.style["opacity"]=0;
        pixel.style["background-color"]="black";
        pixel.addEventListener("mouseenter", (event)=>{colorPixel(event)});
    }
}
function colorPixel(event){
    let targetPixel=event.target;
    let currentOpacity=parseFloat(targetPixel.style["opacity"])+0.1;
    if(currentOpacity>1){
        return;
    }
    targetPixel.style["opacity"]=`${currentOpacity}`;
}