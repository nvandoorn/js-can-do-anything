function getRandomId(prefix) {
  return `${prefix}-${Math.round(Date.now() * Math.random())}`
}

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

function bindGridClickHandlers(ids) {
  for (let id of ids) {
    let gridItem = document.getElementById(id)
    gridItem.addEventListener('click', function() {
      gridItem.classList.toggle('grid-item__highlighted')
    })
  }
}

function mount(rootNode, content) {
  rootNode.innerHTML = Templates.container(content)
}

function mountGrid(rootNode, content, gridIds) {
  mount(rootNode, content)
  bindGridClickHandlers(gridIds)
}

window.onload = function() {
  let rootNode = document.getElementById('root')
  let grid = makeGrid()
  let form = makeForm()
  mount(rootNode, form.template)
  let formNode = document.getElementById(form.id)
  formNode.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
      form = makeForm(formNode.value)
      mountGrid(rootNode, form.template + grid.template, grid.ids)
    }
  })
}
