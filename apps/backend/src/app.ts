import express from "express";
import cors from "cors";
import ratingRoutes from "./routes/ratingRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/articles", ratingRoutes);

export default app;