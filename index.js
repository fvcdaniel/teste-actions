const express = require("express");

const startServer = () => {
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

  return { server, app };
};

module.exports = startServer;
