const compression = require("compression");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Route
const routeProspace = require("./routes/route-prospace");
const routeKuesioner = require("./routes/route-kuesioner");

server.use(cors());
server.use(compression());
server.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

// New Route
server.use(routeProspace);
server.use(routeKuesioner);
