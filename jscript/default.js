const divContainer=document.querySelector(".container");
const sqSide=50;
const sqStyle="height: "+ sqSide + "px; border: 2px solid; width: "+ sqSide +"px; flex-basis:"+ sqSide +" px; box-sizing: border-box;"

function createDivs(nrSides=10){
for (let i=0;i<nrSides;i++){
    for (let j=0;j<nrSides;j++){
        let sqBackground="background-color:grey;";
        let square=document.createElement("div");
        square.setAttribute("style",sqStyle+sqBackground);
        divContainer.setAttribute("style","width:"+ nrSides* sqSide + "px;");
        square.classList.add("square");
        divContainer.appendChild(square);
        }
    }
}

function addHover(){
    const squares=document.querySelectorAll(".square");
    for(let i=0;i<squares.length;i++){
    squares[i].addEventListener("mousemove",function(){
        let sqBackground="background-color:green;";
        squares[i].setAttribute("style",sqStyle+sqBackground);})
        }
    
}

createDivs();
addHover();