import express from "express";
import cors from "cors";
import ratingRoutes from "./routes/ratingRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/articles", ratingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));