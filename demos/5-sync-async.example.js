const ARTICLES = [
  'Felon Ruins the Weed Number',
  'Webassembly is Finally Fast',
  'Spooky Torvalds Ghost is Reportedly Still Berating People'
]

// This function will wait for a bit and
// then return our list of articles
function getArticlesSync() {
  // Let's pretend we have a network connection in this
  // function and we need to wait for a bit before
  // returning the result, so we use a long (but empty)
  // for loop to stay busy
  for (let i = 0; i < 10e9; i++) {}
  if (ARTICLES.length <= 0) {
    throw new Error('No articles to return')
  }
  return ARTICLES
}

// This function requires a callback function
// which is invoked when the articles are ready.
// Note that the callback function should have the form
// function (err, result) where err is an error instance,
// and result is the thing you actually want
function getArticlesAsync(callbackFunction) {
  // we use setTimeout to simulate our "network delay"
  setTimeout(function() {
    if (ARTICLES.length <= 0) {
      // Instead of throwing an error like the synchronous case,
      // we pass one back as the first argument
      callbackFunction(new Error('No articles to return'))
    }
    // If all is well, we pass a null error to indicate success,
    // and then pass the real result as the second argument
    callbackFunction(null, ARTICLES)
  }, 4 * 1000)
}

try {
  let syncArticles = getArticlesSync()
  console.log(syncArticles)
} catch (err) {
  console.error(err)
}

getArticlesAsync(function(err, result) {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})
