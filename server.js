const express = require("express");

const app = express();

//Configuration

app.set("port", process.env.PORT || 5000);

//Server

app.listen(app.get("port"), () =>
  console.log(`Server running on port ${app.get("port")}`)
);
