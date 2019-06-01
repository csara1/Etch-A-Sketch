function positionContainer() {
    let buttonHeight = button.offsetHeight,
        windowHeight = window.innerHeight;
    side = Math.min(window.innerWidth, windowHeight-buttonHeight);
    button.style.marginTop = (windowHeight-side-buttonHeight)/2 + "px";
    containerStyle.width = containerStyle.height = side + "px";
}

function onmouseover(event) {
    let itemStyle = event.target.style;
    itemStyle.backgroundColor = "white";
    itemStyle.borderColor = "black";
}

function addSquares() {
    containerStyle.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
    containerStyle.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";    
    for(i=0; i<squaresPerSide*squaresPerSide; i++) {
        let item = document.createElement('div');
        item.classList.add("item");
        item.id = 'item' + i;
        item.addEventListener("mouseover", onmouseover);
        container.appendChild(item);
    }    
}

function reset() {
    for(i=0; i<squaresPerSide*squaresPerSide; i++) {
        let item = document.getElementById('item' + i);
        item.removeEventListener("mouseover", onmouseover);
    }
    container.innerHTML = "";

    do {
        maxSquaresPerSide = Math.floor(side/6);
        squaresPerSide = parseInt(window.prompt("Squares per side (1..." + maxSquaresPerSide + "): ", "16"));
    } while (squaresPerSide <= 0 || squaresPerSide > maxSquaresPerSide);
    
    addSquares();
}

let button = document.getElementById('reset'),
    container = document.getElementById('container'),
    containerStyle = container.style,
    side = 0,
    squaresPerSide = 16;

positionContainer();
button.addEventListener("click", reset);
window.addEventListener("resize", positionContainer);

addSquares();
