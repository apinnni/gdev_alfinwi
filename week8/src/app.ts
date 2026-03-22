import express from "express";
import profileRoutes from "./routes/profile.route";

const app = express();

app.use(express.json());

app.use("/profiles", profileRoutes);

export default app;