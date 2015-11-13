// var Riot = require('./index.js')
// var r = Riot($APIKEY)
// r.q('k','http://google.com', function(err, response, body) {
//   console.log(body)
// })
// var Riot = require('./index.js').p('k','http://google.com', function(err, response, body) {
//   console.log(body)
// })

// var Riot = require('./index.js')
// var app = Riot.init($APIKEY)

var Riot = require('./index.js')
var app = new Riot($APIKEY)
app.query('http://google.com', function(err, response, body) {
  console.log(err, response, body)
})
