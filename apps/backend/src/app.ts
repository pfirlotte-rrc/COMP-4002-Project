import express, {Express} from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import ratingRoutes from "./api/v1/routes/ratingRoutes";
import hiddenArticleRoutes from "./api/v1/routes/hiddenArticleRoutes"
// import termRoutes from "./api/v1/routes/termRoutes";
// import errorHandler from "./api/v1/middleware/errorHandler";

// initialize express application
const app: Express = express();

// allow use of .env variables
dotenv.config();
// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

// allow express to parse json
app.use(express.json());

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

app.use("api/v1/articles", ratingRoutes);

//Where the client request enters the server to view/hide an article.
app.use("/api/v1", hiddenArticleRoutes);
// use termRoutes
// app.use("/api/v1", termRoutes);

//errorhandler catches errors as last element in middleware chain
// occurs when "next" is invoked
// app.use(errorHandler); 

export default app;
