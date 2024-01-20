// res.write(`<script>console.log("response}");</script>`);

const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();

let resp;
let response;

const fun = async () => {
  try {
    response = await axios.get("http://localhost:5000/"); // Assuming Python server runs on port 5000
    resp = response.data;
    console.log(resp.name);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from Python");
  }
};

fun();

app.use("/", express.static(__dirname + "/"));

// Route to fetch data from Python
app.get("/", async (req, res) => {
  fs.readFile("src/index.html", async (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    response = await axios.get("http://localhost:5000/"); // Assuming Python server runs on port 5000
    res.write(response.data.name);
    return res.end(data);
  });
});

// Other routes and middleware
// ...

const port = 3030;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
