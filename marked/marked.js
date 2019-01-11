var fs = require('fs')
var marked = require('marked')
var http = require('http')



var path = '4.ES6.md'
fs.readFile(path, function(err, data) {
    if(err) {
        throw err
    } else {
        server(marked(data.toString()))
    }

})
function server(data) {
    http.createServer(function (req,res) {
        // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end(data);
    }).listen(8080)
}