const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./App/config/db");
const themeRoutes = require("./App/Routes/themeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", themeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
