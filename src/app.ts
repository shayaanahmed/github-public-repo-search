import express from "express";
import { registerRoutes } from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const routes = registerRoutes();

app.use("/api", routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
