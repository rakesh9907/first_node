import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// the use method is used to add middleware and configuration to the application
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// this is used to parse json and url encoded data
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));

// keep images in public folder
app.use(express.static("public"))

// use of cookie parser is to parse cookies to read from client and sent to client though server (http)
app.use(cookieParser());


export default app;