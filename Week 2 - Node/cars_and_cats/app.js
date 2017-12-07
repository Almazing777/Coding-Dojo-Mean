// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    const splitURL = request.url.split("/");
        fileType = splitURL[1],
        folder = splitURL[2],
        filename = splitURL[3];

    if(fileType === "images"){
        serveJPG(folder, filename, response);
        return;
    }

    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if (request.url === "/stylesheets/style.css") {
       fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
           response.writeHead(200, {'Content-type': 'text/css'});
           response.write(contents);
           response.end();
       });
    }

    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});

    function serveJPG(folder, filename, response) {
        // Read a particular file...
        fs.readFile(`./images/${folder}/${filename}`, function(error, contents) {
        // Respond to the browser
        response.writeHead(200, {'Content-type' : 'image/jpg' });
        response.write(contents);
        response.end();
    });
}
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");

