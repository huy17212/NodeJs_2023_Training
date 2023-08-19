const express = require("express");
const errorHandler = require("./middlewave/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

connectDb();

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`start at port ${port}`);
});

