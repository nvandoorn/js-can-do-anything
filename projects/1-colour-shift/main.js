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
// Make sure we wait until the page is ready.
// Querying the DOM before the page is ready
// will result in queries returning null/empty array
window.onload = function() {
  attentionNodes = document.getElementsByClassName('attention')
}
document.onmousemove = function(event) {
  // calculate the color once (will be used
  // for all nodes)
  let color = computeRgb(
    event.pageX,
    event.pageY,
    window.innerWidth,
    window.innerHeight
  )
  // iterate over each node and update its style
  for (let node of attentionNodes) {
    node.style.color = color
  }
}
