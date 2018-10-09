function computeTotal1(subtotal) {
  if (subtotal > 50) {
    // Variables declared with var are scoped to
    // the function. This means statements outside
    // of the if block can use the variable too.

    // If this variable was declared with let,
    // this would be an error
    var discount = 10
  } else {
    discount = 5
  }
  return subtotal - discount
}

function computeTotal3(subtotal) {
  // Declare the variable at the outer scope
  let discount
  if (subtotal > 50) {
    discount = 10
  } else {
    discount = 5
  }
  return subtotal - discount
}

function computeTotal4(subtotal) {
  // const declarations are block scoped and cannot be re-assigned
  // (i.e discount = 7 is illegal)
  const discount = subtotal > 50 ? 10 : 5
  // Objects declared using const cannot be re-assigned either...
  const customer = {}
  // but the object itself may still be
  // modified
  customer.loyaltyDiscount = 5
  return subtotal - discount - customer.loyaltyDiscount
}
