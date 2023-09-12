import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import personRoutes from "./Routes/person.routes";
import connectToDatabase from "./config/database";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// MongoDB connection
connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use(personRoutes);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
