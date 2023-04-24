const { log } = require('console');
const http = require('http')
const data = require('./utils/data')

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if(url === `/rickandmorty/character`){
        // const splitted = url.split('/');
        // console.log(splitted);
        console.log(data)
    }
  })
  .listen(3001, "localhost");
