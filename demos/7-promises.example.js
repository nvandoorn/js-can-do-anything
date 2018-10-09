// We return a new instance of the Promise object.
// The constructor takes a callback as the first parameter,
// and then this callback receives 2 more callbacks:
// resolve and reject. Calling resolve can be thought of like
// "return", while reject can be thought of like "throws"
function getDataA(arg) {
  return new Promise(function(resolve, reject) {
    resolve('Ah yes data a, excellent')
  })
}

function getDataB(arg) {
  return new Promise(function(resolve, reject) {
    resolve('Ah yes data b, excellent')
  })
}

function getDataC(arg) {
  return new Promise(function(resolve, reject) {
    resolve('Ah yes data c, excellent')
  })
}

function getDataD(arg) {
  return new Promise(function(resolve, reject) {
    resolve('Ah yes data d, excellent')
  })
}

function getDataE(arg) {
  return new Promise(function(resolve, reject) {
    resolve('Ah yes data e, excellent')
  })
}

getDataA('here we go')
  .then(function(err, res) {
    return getDataB(res)
  })
  .then(function(err, res) {
    return getDataC(res)
  })
  .then(function(err, res) {
    return getDataD(res)
  })
  .then(function(err, res) {
    return getDataE(res)
  })
  .then(function(err, res) {
    console.log(res)
  })
