// We want to generate many "instances" of our templates
// so being able to generate a random ID that will not collide
// with other generated ids is very helpful
function getRandomId(prefix) {
  return `${prefix}-${Math.round(Date.now() * Math.random())}`
}

// Create many of our gridItem template
// and insert them into our gridContainer
// template. We return the template as one big string
// and return an array of ids for the gridItems such
// that we can query them later
function makeGrid() {
  let gridItems = []
  let gridIds = []
  for (let i = 1; i <= 365; i++) {
    let id = getRandomId('grid-item')
    gridIds.push(id)
    gridItems.push(Templates.gridItem(false, id))
  }
  let gridTemplate = Templates.gridContainer(gridItems.join(''))
  return {
    template: gridTemplate,
    ids: gridIds
  }
}

// Create an "instance" of our form template.
// id of the form doesn't matter, but id of the
// input is very important
function makeForm(value) {
  let id = 'motivation-form'
  let template = Templates.form(
    'What are you working on?',
    getRandomId(''),
    id,
    value
  )
  return { template, id }
}

// Bind a callback to each DOM node
// identified by one of the elements of ids
function bindGridClickHandlers(ids) {
  for (let id of ids) {
    let gridItem = document.getElementById(id)
    gridItem.addEventListener('click', function() {
      // This css class "highlights" the grid item
      // so we want to toggle it when the user clicks
      gridItem.classList.toggle('grid-item__highlighted')
    })
  }
}

// Helper function to mount content to
// the root node (wrapped in our container)
function mount(rootNode, content) {
  rootNode.innerHTML = Templates.container(content)
}

// Helper function to mount our grid
// and bind callbacks to our gridItems
function mountGrid(rootNode, content, gridIds) {
  mount(rootNode, content)
  bindGridClickHandlers(gridIds)
}

window.onload = function() {
  // Get our root node
  let rootNode = document.getElementById('root')
  // Make our templates
  let grid = makeGrid()
  let form = makeForm()
  // Mount just the form
  mount(rootNode, form.template)
  let formNode = document.getElementById(form.id)
  formNode.addEventListener('keydown', function(event) {
    // When the user presses enter in the form
    // mount the grid below the form
    if (event.key == 'Enter') {
      // Our old form template did not contain
      // the users value, so we re-make it, and pass
      // in the user input (grabbed from the formNodes value)
      form = makeForm(formNode.value)
      mountGrid(rootNode, form.template + grid.template, grid.ids)
    }
  })
}
