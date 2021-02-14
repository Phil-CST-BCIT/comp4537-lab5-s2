const http = require('http');
const url = require('url');


const server = http.createServer(function(req, res) {

    res.writeHead(
        200, 
        {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*"
        }
    );

    res.end("hello world");
});


server.listen(8080);