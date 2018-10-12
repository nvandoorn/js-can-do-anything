// 12-manual-code-splitting-a.example.js
const COST_OF_ITEM = 15
// We use this immediately invoked anonymous function
// to create a private, non global scope (usually called a module).
// Anything that we want exposed publicly must be included in the
// returned object. This pattern is sometimes called
// "revealing modules"
let CartModule = (function() {
  let moduleScopeVariable = 'super secret'

  // Globally private function, never returned from module
  function sideEffects() {
    console.log('doing side effects')
  }

  // we make this public by adding it to
  // the return object below
  function removeFromCart(item) {
    sideEffects()
    console.log(`${item} removed from cart`)
    return -COST_OF_ITEM
  }
  return {
    // we define this function in the public return object,
    // so it's public by definition
    addToCart: function(item) {
      console.log(`${item} added to cart`)
      return COST_OF_ITEM
    },
    removeFromCart
  }
})()
