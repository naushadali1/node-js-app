const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      "<body> <form action='/message' name='message' method='POST' > <input type='text'> </input> <br> <button type = 'submit'> send </button> </form> </body>"
    )
    res.write("</html>")
    return res.end()
  }
  if (url === "/message" && method === "POST") {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    fs.writeFileSync("Message.txt", "This is message file");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body> <h1> welcome to the server</h1> </body>");
  res.write("</html>");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("URL: http://localhost:3000");
});
