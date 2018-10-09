function Rocket(name) {
  this.name = name
}

Rocket.prototype.launch = function() {
  console.log('launching...')
}

Rocket.prototype.land = function() {
  console.log('landing...')
}

var myRocket = new Rocket('Felon Musk')
