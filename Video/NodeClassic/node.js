const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer();

server.on('request', (request, response) => {
  const parsed = url.parse(request.url);
  //console.log(parsed)
  //response.end('Testing...');
  switch (parsed.pathname) {
    case '/' : {
      render('./views/home.html', 200, {}, response);
      break;
    }
    case '/about' : {
      render('./views/about.html', 201, {'Content-type' : 'text/plain'}, response);
      break;
    }
    case '/postuser' : {
      request.on('data', (data) => {
        console.log(querystring.parse(data.toString()));
      });
    }
    case '/create-user' : {
      //console.log(querystring.parse(parsed.query));
      //render('./views/home.html', 200, {}, response);
      response.writeHead(200, {'Content-type' : 'application/json'});
      response.end(JSON.stringify(querystring.parse(parsed.query)));
    }
    default : {
      render('./views/404.html', 404, {}, response)
    }
  }
});

function render(path, status=200, headers={}, response) {
  response.writeHead(status, headers);
  fs.createReadStream(path).pipe(response);
}

server.listen(3000, () => console.log('Listening ... '));

// console.log(url);
