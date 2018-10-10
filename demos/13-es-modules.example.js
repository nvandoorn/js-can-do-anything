import * as CartModule from './13-es-modules-a.example'
import * as AccountModule from './13-es-modules-b.example'

let delta = CartModule.addToCart('Juuuul')
let customerId = 'juuuul-02'
AccountModule.adjustCustomerBalance(customerId, delta)
console.log(
  `Customer has a balance of ${AccountModule.getCustomerBalance(customerId)}`
)
