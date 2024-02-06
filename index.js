const http = require("http");
const fs = require("fs");
const multer = require("multer");

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
   } else if (req.url === "/file-write") {
      fs.writeFile("demo.txt", "hello world", (err) => {
         if (err) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("The File Could Not Be Created");
            res.end();
         } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("The File Was Created Successfully");
            res.end();
         }
      });
   } else if (req.url === "/upload") {
      const storage = multer.diskStorage({
         destination: (req, file, callBack) => {
            callBack(null, "./uploads");
         },
         filename: (req, file, callBack) => {
            callBack(null, file.originalname);
         },
      });

      const upload = multer({ storage: storage }).single("myfile");

      upload(req, res, (err) => {
         if (err) {
            return res.end("File Upload Failed");
         }
         res.end("File Upload Successful");
      });
   } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Page Not Found");
      res.end();
   }
});

const port = 5500;

server.listen(port, () => {
   console.log(`The server is running successfully at port: ${port}`);
});
