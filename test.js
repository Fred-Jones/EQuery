// var Riot = require('./index.js')
// var r = Riot('7373751d-df26-46a0-90ae-82037012187a')
// r.q('k','http://google.com', function(err, response, body) {
//   console.log(body)
// })
// var Riot = require('./index.js').p('k','http://google.com', function(err, response, body) {
//   console.log(body)
// })

// var Riot = require('./index.js')
// var app = Riot.init('7373751d-df26-46a0-90ae-82037012187a')

var Riot = require('./index.js')
var app = new Riot('7373751d-df26-46a0-90ae-82037012187a')
app.query('http://google.com', function(err, response, body) {
  console.log(err, response, body)
})
