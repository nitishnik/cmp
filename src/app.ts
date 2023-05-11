import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const port = config.get<number>("port");
const host = process.env.HOST ?? "localhost";

const app = express();

app.get("/", (req, res) => {
  logger.info("hello");
  res.send("hello");
});

app.listen(port, async () => {
  await connect();
  logger.info(`[ ready ] http://${host}:${port}`);
});
