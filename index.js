const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is Home Page");
      res.end();
   } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is About Page");
      res.end();
   } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is Contact Page");
      res.end();
   }
});

const port = 5500;

server.listen(port, () => {
   console.log(`The server is running successfully at port: ${port}`);
});
