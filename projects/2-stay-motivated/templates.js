let Templates = (function() {
  return {
    gridContainer(gridItems, id) {
      return `<section class="grid-container" id=${id}>
          ${gridItems}
        </section>`
    },
    gridItem(isHighlighted, id) {
      return `<div
        id=${id}
        class="grid-item ${isHighlighted ? 'grid-item__highlighted' : ''}">
      </div>`
    },
    form(header, id, inputId, value = '') {
      return `<section class="form-container" id=${id}>
        <h1>${header}</h1>
        <input autofocus type="text" name="goal" value="${value}" id=${inputId}></input>
      </section>`
    },
    container(content) {
      return `<main class="container">${content}</main>`
    }
  }
})()
