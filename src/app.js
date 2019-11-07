var express = require('express');
var Instagram = require('instagram-nodejs-without-api');
var tag = require("./Entidades/tag");
var app = express();

var instagram = new Instagram();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/topPost/:hashtag', function(request, response, next) {
    var hashtag = request.params.hashtag;
    instagram.getCsrfToken().then((csrf) =>
    {
        instagram.csrfToken = csrf;
    }).then(() =>
    {
        return instagram.searchBy('hashtag', hashtag).then(r => {
          var textPost = r['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_top_posts']
          ['edges'][0]['node']['edge_media_to_caption']['edges'][0]['node']['text'];
          var myTag = new tag("1",textPost,"Un lugar");
          //console.log("-->Búsqueda del top post con hastag " + hashtag);
          //console.log("--->Post: " + textPost);
          return response.sendStatus(200);
        });
        
    }).catch(console.error);
  });


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;