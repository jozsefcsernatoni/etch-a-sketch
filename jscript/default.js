const divContainer=document.querySelector(".container");
const widthContainer=960;

function createDivs(nrSides=16){
    const sqSide=widthContainer/nrSides;
const sqStyle="height: "+ sqSide + "px; border: 1px solid; width: "+ sqSide +"px; flex-basis:"+ sqSide +" px; box-sizing: border-box;"
for (let i=0;i<nrSides;i++){
    for (let j=0;j<nrSides;j++){
        let sqBackground="background-color:grey;";
        let square=document.createElement("div");
        square.setAttribute("style",sqStyle+sqBackground);
        divContainer.setAttribute("style","width:"+widthContainer+"px;");
        square.classList.add("square");
        divContainer.appendChild(square);
        }
    }
}

function addHover(){
    const squares=document.querySelectorAll(".square");
    for(let i=0;i<squares.length;i++){
    squares[i].addEventListener("mousemove",function(){
        squares[i].style.backgroundColor = "lightblue";})
        }
    
}

function captureButton(){
    const setSquareButton=document.querySelector("button");

    setSquareButton.addEventListener("click",function(){
        let usrSides=prompt("Please enter a positive number up to 100:", "16");
        usrSides=usrSides<=100 ? usrSides : 100;
        while(divContainer.firstChild){
            divContainer.removeChild(divContainer.firstChild);
        }
        createDivs(usrSides);
        addHover();
    }
    )
}

createDivs();
addHover();
captureButton();