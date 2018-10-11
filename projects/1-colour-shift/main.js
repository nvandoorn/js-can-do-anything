// Lifted this from Erik
// https://github.com/uvicwebdev/javascript-intro/blob/master/webdev_logo/js/main.js
function computeRgb(x, y, width, height) {
  let r = Math.floor((x / width) * 255) + 5
  let g = Math.floor((y / height) * 255) + 5
  let b = Math.floor((r + g) / 2)
  return `rgb(${r},${g},${b})`
}
// This will be an array of nodes since we are
// using class name (array may have length 0 or 1)
let attentionNodes
window.onload = function() {
  document.getElementsByClassName('attention')
}
document.onmousemove = function(event) {
  // iterate over each node and update its style
  let color = computeRgb(
    event.pageX,
    event.pageY,
    window.innerWidth,
    window.innerHeight
  )
  for (let node of attentionNodes) {
    node.style.color = color
  }
}
