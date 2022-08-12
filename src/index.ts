import express from "express";
import http from "http";
import fetchWordRoute from "./routes/fetchWordRoute";

const app = express();

app.use("/search", fetchWordRoute);

http.createServer(app).listen(8089);
