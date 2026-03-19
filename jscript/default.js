const divContainer=document.querySelector(".container");
const widthContainer=960;

function createDivs(nrSides=16){
    const sqSide=widthContainer/nrSides; //calculates the size of the square
const sqStyle="height: "+ sqSide + "px; border: 1px solid; width: "+ sqSide +"px; flex-basis:"+ sqSide +" px; box-sizing: border-box;"
for (let i=0;i<nrSides;i++){
    for (let j=0;j<nrSides;j++){
        let sqBackground="background-color:rgb(255,255,255);";
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
        function createRandomRGB(){
        const r=Math.floor(Math.random() * 256);
        const g=Math.floor(Math.random() * 256);
        const b=Math.floor(Math.random() * 256);
        return "rgb("+ r +","+ g + "," + b + ")";
        }

        if(squares[i].style.backgroundColor=="rgb(255, 255, 255)"){
        squares[i].style.backgroundColor = createRandomRGB();
        squares[i].style.opacity="0.1";
    } else {
        let curOpacity=Number(squares[i].style.opacity);
        squares[i].style.opacity=String(curOpacity < 1? curOpacity + 0.1 : 1);
    }
    }
    )
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