let customerBalance = {}

export function adjustCustomerBalance(customerId, delta) {
  let customer = customerBalance[customerId]
  if (customer) {
    customerBalance[customerId] += delta
  } else customerBalance[customerId] = delta
}

export function getCustomerBalance(customerId) {
  return customerBalance[customerId]
}
