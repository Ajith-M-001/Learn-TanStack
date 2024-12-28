// backend/app.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import cors from "cors"; // CORS middleware
import userRoutes from "./router.js/userRouter.js";
import postRoutes from "./router.js/panigationRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Start the server only after successful database connection
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit process with failure
  }
};

// Call the function to start the server
startServer();
