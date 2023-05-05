const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes(`/rickandmorty/character`)) {
      const id = parseInt(url.split("/").at(-1));
      getCharById(res, id);

      // const character = data.find((char) => char.id === id);

      // if(character){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   return res.end(JSON.stringify(character));
      // }else{
      //   res.writeHead(404, {'Content-Type': 'application/json'});
      //   return res.end(JSON.stringify('Character not found'));
      // }
    }
  })
  .listen(3001, "localhost");
