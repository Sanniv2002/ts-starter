import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";

// Controllers
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/api/v1", apiController.health);


//Increase refresh speed in development
Bun.serve({
    fetch(req: Request) {
      return new Response(`Reloaded`);
    },
    port: 3000,
  });

export default app;