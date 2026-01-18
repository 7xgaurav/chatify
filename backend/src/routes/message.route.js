import express from "express";
const router = express.Router();


router.get("/send" , (req ,res)=>{
  res.send("messages send successfully");
});


export default router;