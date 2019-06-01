function onresize() {
  side = Math.min(window.innerWidth, window.innerHeight) + "px";
  containerStyle.width = containerStyle.height = side;
}

let container = document.getElementById('container'),
    containerStyle = container.style,
    side = Math.min(window.innerWidth, window.innerHeight) + "px",
    squaresPerSide = 16;

containerStyle.width = containerStyle.height = side;
window.addEventListener("resize", onresize);

containerStyle.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
containerStyle.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";
for(i=0; i<squaresPerSide; i++) {
    for(j=0; j<squaresPerSide; j++) {
        container.innerHTML += (i+j)&1 ? '<div class="odd"></div>'
                                      : '<div class="even"></div>';
    }
}
