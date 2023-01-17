const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));

// Routes
const ClienteRoutes = require("./routes/ClienteRoutes");
const ApiRoutes = require("./routes/ApiRoutes");

app.use("/clientes", ClienteRoutes);
app.use("/api/nominatim", ApiRoutes);

app.listen(5000);
