function positionContainer() {
    let buttonHeight = button.offsetHeight,
        windowHeight = window.innerHeight;
    side = Math.min(window.innerWidth, windowHeight-buttonHeight);
    button.style.marginTop = (windowHeight-side-buttonHeight)/2 + "px";
    containerStyle.width = containerStyle.height = side + "px";
}

function onmouseover(event) {
    let item = event.target;
    if(window.getComputedStyle(item).backgroundColor == "rgb(255, 255, 255)") {
        let red = Math.floor(Math.random() * 256),
            green = Math.floor(Math.random() * 256),
            blue = Math.floor(Math.random() * 256);
        item.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        item.style.borderColor = "rgb(" + (255-red) + "," + (255-green) + "," + (255-blue) + ")";
    }
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
        redDecrement[i] = greenDecrement[i] = blueDecrement[i] = 255;
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
    
    redDecrement = greenDecrement = blueDecrement = new Array(squaresPerSide*squaresPerSide);
    addSquares();
}

let button = document.getElementById('reset'),
    container = document.getElementById('container'),
    containerStyle = container.style,
    side = 0,
    squaresPerSide = 16
    redDecrement = greenDecrement = blueDecrement = new Array(squaresPerSide*squaresPerSide);

positionContainer();
button.addEventListener("click", reset);
window.addEventListener("resize", positionContainer);

addSquares();
