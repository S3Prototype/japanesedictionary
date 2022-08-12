import getWords from "../utils/words";
import express from "express";
import https from "https";
import http from "http";
const app = express();

app.get("/", async (req: any, res: any) => {
  const words: any = await getWords();
  // console.log(words.version);
  console.log(words.words[50]);
  res.send(words.words[50]);
});

http.createServer(app).listen(8089);
https.createServer({}, app).listen(8090);
