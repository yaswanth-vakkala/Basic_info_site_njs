require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, content) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(content);
    });
  }
  if (req.url === "/about") {
    fs.readFile("about.html", (err, content) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(content);
    });
  }

  if (req.url === "/contact") {
    fs.readFile("contact-me.html", (err, content) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(content);
    });
  }
  //   fs.readFile(req.url, (err,content)=>{
  //     if(err){
  //         if(err.code === 'ENOENT'){

  //             fs.readFile("404.html", (err, content) => {
  //               if (err) {
  //                    throw err;
  //               }
  //               res.statusCode = 200;
  //               res.setHeader("Content-Type", "text/html");
  //               res.end(content);
  //             });
  //         }
  //     }
  //     )
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
