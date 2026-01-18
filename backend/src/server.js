import express from "express";
import dotenv from "dotenv";

import { fileURLToPath } from "url";
import path from "path";




import authRouters from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
dotenv.config();

const app = express();
//deplyoment code
const ___dirname = path.resolve();

const PORT = process.env.PORT||3000;

app.use("/api/auth" ,  authRouters);
app.use("/api/messages" , messagesRoutes);

//make ready for deployment
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(___dirname,"../frontend/dist")))
  app.get("*" , (__,res)=>{
    res.sendFile(path.join(___dirname , "../frontend" , "dist" , "index.html"));
  })
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
