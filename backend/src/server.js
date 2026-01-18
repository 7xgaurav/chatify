import express from "express";
import dotenv from "dotenv";

import authRouters from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT||3000;

app.use("/api/auth" ,  authRouters);
app.use("/api/messages" , messagesRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
