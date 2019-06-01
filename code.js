function positionContainer() {
    let buttonHeight = button.offsetHeight,
        windowHeight = window.innerHeight;
    side = Math.min(window.innerWidth, windowHeight-buttonHeight);
    button.style.marginTop = (windowHeight-side-buttonHeight)/2 + "px";
    containerStyle.width = containerStyle.height = side + "px";
}

function onmouseover(event) {
    let item = event.target,
        itemNumber = parseInt(item.id),
        itemPass = pass[itemNumber]++;
    if(itemPass > 10) {
        return;
    }
    let redStep = initRed[itemNumber]/10,
        greenStep = initGreen[itemNumber]/10,
        blueStep = initBlue[itemNumber]/10,
        red = (10-itemPass) * redStep,
        green = (10-itemPass) * greenStep,
        blue = (10-itemPass) * blueStep,
        itemStyle = item.style;
    itemStyle.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    itemStyle.borderColor = "rgb(" + (255-red) + "," + (255-green) + "," + (255-blue) + ")";
}

function addSquares() {
    containerStyle.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
    containerStyle.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";    
    for(i=0; i<squaresPerSide*squaresPerSide; i++) {
        let item = document.createElement('div');
        item.classList.add("item");
        item.id = i;
        item.addEventListener("mouseover", onmouseover);
        container.appendChild(item);
        pass[i] = 0;
        initRed[i] = Math.floor(Math.random() * 256);
        initGreen[i] = Math.floor(Math.random() * 256);
        initBlue[i] = Math.floor(Math.random() * 256);
    }    
}

function reset() {
    for(i=0; i<squaresPerSide*squaresPerSide; i++) {
        let item = document.getElementById(i);
        item.removeEventListener("mouseover", onmouseover);
    }
    container.innerHTML = "";

    do {
        maxSquaresPerSide = Math.floor(side/6);
        squaresPerSide = parseInt(window.prompt("Squares per side (1..." + maxSquaresPerSide + "): ", "16"));
    } while (squaresPerSide <= 0 || squaresPerSide > maxSquaresPerSide);
    
    initRed = new Array(squaresPerSide*squaresPerSide);
    initGreen = new Array(squaresPerSide*squaresPerSide);
    initBlue = new Array(squaresPerSide*squaresPerSide);
    pass = new Array(squaresPerSide*squaresPerSide);
    addSquares();
}

let button = document.getElementById('reset'),
    container = document.getElementById('container'),
    containerStyle = container.style,
    side = 0,
    squaresPerSide = 16
    initRed = new Array(squaresPerSide*squaresPerSide);
    initGreen = new Array(squaresPerSide*squaresPerSide);
    initBlue = new Array(squaresPerSide*squaresPerSide);
    pass = new Array(squaresPerSide*squaresPerSide);

positionContainer();
button.addEventListener("click", reset);
window.addEventListener("resize", positionContainer);

addSquares();
