import {Router} from "express"

const router = Router()

router.get("/hello",(req,res)=>{
      try {
          res.status(200).json({
              success:true,
              message:"Hello from github action Welsome back"
          })
      } catch (error) {
         res.status(500).json({
            success:false,
            message:"Falied"
         })
      }
})


router.get("/bye",(req,res)=>{
      try {
          res.status(200).json({
              success:true,
              message:"Bye Bye"
          })
      } catch (error) {
         res.status(500).json({
            success:false,
            message:"Falied"
         })
      }
})



export default router