function getDataA(arg, callback) {
  callback(null, 'Ah yes data a, excellent')
}

function getDataB(arg, callback) {
  callback(null, 'Ah yes data b, excellent')
}

function getDataC(arg, callback) {
  callback(null, 'Ah yes data c, excellent')
}

function getDataD(arg, callback) {
  callback(null, 'Ah yes data d, excellent')
}

function getDataE(arg, callback) {
  callback(null, 'Ah yes data e, excellent')
}

// Known as "callback hell" or the
// "the pyramid of doom" -- both work
getDataA('here we go', function(err, res) {
  getDataB(res, function(err, res) {
    getDataC(res, function(err, res) {
      getDataD(res, function(err, res) {
        getDataE(res, function(err, res) {
          // kewl
          console.log(res)
        })
      })
    })
  })
})
