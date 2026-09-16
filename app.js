import express from "express"
import router from "./src/route/test.js"

const app = express()


app.use("/",router)


export default app;

// app.listen(5000,()=>{
//     console.log("Server is running on port 5000")
// })