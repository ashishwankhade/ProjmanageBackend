import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//BASIC CONFIGURATION
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//COOKIES PARSER
app.use(cookieParser());


//CORS CONFIGURATION
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//ROUTES
import healthcheckRoute from "./routes/healthcheck.route.js";
import authRouter from "./routes/auth.routes.js";
app.use("/api/v1/healthcheck", healthcheckRoute);
app.get("/", (req, res) => {
  res.send("Health check route is working");
});

app.use("/api/v1/auth", authRouter);

export default app;
