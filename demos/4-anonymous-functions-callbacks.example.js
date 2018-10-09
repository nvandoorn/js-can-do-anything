// Named function
function getArticles() {}

function getPlaylist(callback) {
  callback(null, ['Yandhi', 'oh wait shit nevermind'])
}

// Anonymous function.
// Usually anonymous functions
// are passed as arguments
// to async functions
getPlaylist(function(err, res) {})

// You can also name anonymous functions
// and refer to it by name
let getPlaylistCallback = function(err, res) {
  if (err) {
    console.error(err)
  } else {
    console.log(res)
  }
}

// Regular named functions work too
function namedPlaylistCallback(err, res) {}

getPlaylist(getPlaylistCallback)
getPlaylist(namedPlaylistCallback)
