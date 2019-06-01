function positionContainer() {
    let buttonHeight = button.offsetHeight,
        windowHeight = window.innerHeight,
        side = Math.min(window.innerWidth, windowHeight-buttonHeight);
    button.style.marginTop = (windowHeight-side-buttonHeight)/2 + "px";
    containerStyle.width = containerStyle.height = side + "px";
}

function onmouseover(event) {
    let itemStyle = event.target.style;
    itemStyle.backgroundColor = "white";
    itemStyle.borderColor = "black";
}

let button = document.getElementById('reset'),
    container = document.getElementById('container'),
    containerStyle = container.style,
    squaresPerSide = 16;

positionContainer();
window.addEventListener("resize", positionContainer);

containerStyle.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
containerStyle.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";

for(i=0; i<squaresPerSide*squaresPerSide; i++) {
    container.innerHTML += '<div class="item" id="item' + i + '"></div>';
}

for(i=0; i<squaresPerSide*squaresPerSide; i++) {
  let item = document.getElementById('item' + i);
  item.addEventListener("mouseover", onmouseover);
}
