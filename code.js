function onresize() {
  side = Math.min(window.innerWidth, window.innerHeight)+"px";
  container.style.width = container.style.height = side;
}

let container = document.getElementById('container'),
    side = Math.min(window.innerWidth, window.innerHeight)+"px";
container.style.width = container.style.height = side;
window.addEventListener("resize", onresize);
