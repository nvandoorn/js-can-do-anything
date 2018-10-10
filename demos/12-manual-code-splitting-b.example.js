let AccountModule = (function() {
  let customerBalance = {}
  return {
    adjustCustomerBalance: function(customerId, delta) {
      let customer = customerBalance[customerId]
      if (customer) {
        customerBalance[customerId] += delta
      } else customerBalance[customerId] = delta
    },
    getCustomerBalance: function(customerId) {
      return customerBalance[customerId]
    }
  }
})()
