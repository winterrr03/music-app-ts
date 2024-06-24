import express, { Express, Request, Response } from "express";
import env from "dotenv";
env.config();

import { connect } from "./config/database";

connect();

const app: Express = express();
const port: (number | string) = `${process.env.PORT}` || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

import clientRoutes from "./routes/client/index.route";

clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});