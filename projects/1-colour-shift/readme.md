# 1. Colour Shift

## Goal

Get familiar with how the DOM API works in the context of static HTML with some JS.

## Starter

This template demos a simple static page and uses a small amount of JavaScript to modify the page on mouse move. Not super interesting, but it could serve as an excellent base for something more exciting. If you have a cool idea please try it! But if not, a few ideas are suggested below.

### Expansion Ideas

- Move nodes around the page as the user moves their mouse
  - Try it with different equations to map `mouseX => nodeX` and `mouseY => nodeY`
- Make a `<textbox>` in the HTML and make the page react to certain words.
  - Hint: Use the DOM API to get the content of the textbox and then split it into tokens (e.g `textBoxContent.split(' ')`) and then search the array with a for loop for specific words
- Give your page the essence of MySpace by playing some music without anyone asking for it. Keep them engaged by controlling the volume with their cursor position (don't tell them though). [Hint](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement).
