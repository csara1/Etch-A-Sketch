var onresize = function() {
  width = window.outerWidth;
  height = window.outerHeight;
  document.querySelector('div').innerText = width + ' x ' + height; 
}
width = window.outerWidth;
height = window.outerHeight;
document.querySelector('div').innerText = width + ' x ' + height; 
window.addEventListener("resize", onresize);
