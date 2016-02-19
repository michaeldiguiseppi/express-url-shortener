var express = require('express');
var router = express.Router();
var key = require('./keys');
var request = require('request');


var shortUrl, longUrl;

router.get('/', function(req, res, next) {
  res.render('index.html', {shortUrl: shortUrl, longUrl: longUrl});
});

router.post('/shorten', function(req, res, next) {
    console.log(req.body);
    var options = {
            method: 'POST',
            url: 'https://www.googleapis.com/urlshortener/v1/url',
            qs: { key: key },
            headers:
            { 'content-type': 'application/json' },
            body: { longUrl: req.body.url },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) {
                throw new Error(error);
            };
            shortUrl = body.id;
            longUrl = body.longUrl;
            console.log('short: ', shortUrl, 'long: ', longUrl);
            res.json({ shortUrl: shortUrl, longUrl: longUrl });
        });
});


module.exports = router;
