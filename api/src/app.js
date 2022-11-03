const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//ROUTES
app.use("/", require("./routes/routes.js"));
