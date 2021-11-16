const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");

const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("db sucess"))
    .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);

app.listen(process.env.PORT || 3500, () => {
    console.log("backend is running");
});