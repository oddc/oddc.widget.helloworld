(function() {
    'use strict';

    var connect = require('connect'),
        serveStatic = require('serve-static');

    connect()
        .use(serveStatic(__dirname + '/', {
            maxAge: '1d',
            setHeaders: setCustomCacheControl
        }))
        .listen(8080);

    console.log('server running at http://127.0.0.1:8080');

    function setCustomCacheControl(res, path) {
        res.setHeader('Cache-Control', 'public, max-age=0');
        res.setHeader("Access-Control-Allow-Origin", "*");
    }

})();


