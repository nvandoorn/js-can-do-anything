// Only things with "export" in front of them
// are available outside this module

const COST_OF_ITEM = 15

let moduleScopeVariable = 'super secret'

export function sideEffects() {
  console.log('doing side effects')
}

export function removeFromCart(item) {
  sideEffects()
  console.log(`${item} removed from cart`)
  return -COST_OF_ITEM
}

export function addToCart(item) {
  console.log(`${item} added to cart`)
  return COST_OF_ITEM
}
