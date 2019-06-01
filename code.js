function onresize() {
    side = Math.min(window.innerWidth, window.innerHeight) + "px";
    containerStyle.width = containerStyle.height = side;
}

function onmouseover(event) {
    let itemStyle = event.target.style;
    itemStyle.backgroundColor = "white";
    itemStyle.borderColor = "black";
}

let container = document.getElementById('container'),
    containerStyle = container.style,
    side = Math.min(window.innerWidth, window.innerHeight) + "px",
    squaresPerSide = 16;

containerStyle.width = containerStyle.height = side;
window.addEventListener("resize", onresize);

containerStyle.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
containerStyle.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";

for(i=0; i<squaresPerSide*squaresPerSide; i++) {
    container.innerHTML += '<div class="item" id="item' + i + '"></div>';
}

for(i=0; i<squaresPerSide*squaresPerSide; i++) {
  let item = document.getElementById('item' + i);
  item.addEventListener("mouseover", onmouseover);
}
