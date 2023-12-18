import cors from "cors";
import express from "express";
import initRoutes from "./src/routes";
import TestConnect from "./src/config/connectDB";

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

TestConnect();

initRoutes(app);
const post = process.env.PORT || 8888;
app.listen(post, () => {
  console.log(`http://localhost:${post}`);
});
