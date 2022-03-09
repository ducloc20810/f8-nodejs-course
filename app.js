import express from "express";

const app = express();
const port = 3000;

// route
app.get("/", (req, res) => {
  var a = 5;
  var b = 6;
  var c = a + b;
  res.send("Hello World");
});

app.listen(port, () => console.log("App is listening on port", port));
