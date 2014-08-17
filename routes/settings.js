var express = require('express');
var router = express.Router();
var request = require('request');
var htmlparser2 = require('htmlparser2');

/* GET users listing. */
router.get('/', function(req, res) {
  var url = 'http://tickets.fc-zenit.ru/tickets/';
  request(url, function(err, resp, body) {
    var table = '';
    if (err) {
      console.log('ERROR');
      return;
    }
    table = /<table class="matches">([\s\S]*)<\/table>/.exec(body);
   // res.send(body);


    res.send(table[1]);
   // body = JSON.parse(body);
   // // logic used to compare search results with the input from user
   //  if (!body.query.results.RDF.item) {
   //   craig = "No results found. Try again.";
   // } else {
   //  craig = body.query.results.RDF.item[0]['about'];
   // }
   // pass back the results to client side
   // res.send(body);
  });
});

module.exports = router;
