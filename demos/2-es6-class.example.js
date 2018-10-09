class Rocket {
  constructor(name) {
    this.name = name
  }

  launch() {
    console.log('launching...')
  }

  land() {
    console.log('landing...')
  }
}

const myRocket = new Rocket('Felon Musk II')
