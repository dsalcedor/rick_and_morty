// const http = require("http");
// const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes(`/rickandmorty/character`)) {
//       const id = parseInt(url.split("/").at(-1));
//       getCharById(res, id);

// const character = data.find((char) => char.id === id);

// if(character){
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   return res.end(JSON.stringify(character));
// }else{
//   res.writeHead(404, {'Content-Type': 'application/json'});
//   return res.end(JSON.stringify('Character not found'));
// }
// }
// })
// .listen(3001, "localhost");

///////////////////////////////////Express//////////////////////////////////////////

const express = require("express");
const router = require("./routes/index");
const server = express();
const { conn } = require('./DB_connection');
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
