// Create a module to keep
// our template functions
// out of the global scope
let Templates = (function() {
  return {
    // Allowing an id to be passed in is very useful
    // for finding this node after it gets mounted
    gridContainer(gridItems, id) {
      return `<section class="grid-container" id="${id}">
          ${gridItems}
        </section>`
    },
    gridItem(isHighlighted, id) {
      return `<div
        id="${id}"
        class="grid-item ${isHighlighted ? 'grid-item__highlighted' : ''}">
      </div>`
    },
    form(header, id, inputId, value = '') {
      return `<section class="form-container" id="${id}">
        <h1>${header}</h1>
        <input autofocus type="text" name="goal" value="${value}" id="${inputId}">
        </input>
      </section>`
    },
    container(content) {
      return `<main class="container">${content}</main>`
    }
  }
})()
