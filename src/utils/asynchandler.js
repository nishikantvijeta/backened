//import { Promise } from "mongoose"
// import mongoose from "mongoose";
// const { Promise } = mongoose;

const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch(next)
    }
}
export{asyncHandler}
// const asynchandler=()=>{}
// const asynchandler=(func)=>()=>{}
// onst asynchandler=(func)=>async()=>{}
// const asyncHandler=(fn)=>async(req,res,next)=>{
// try{
// await fn(req,res,next)
// }catch(error){
//     res.status(err.code||500).json({
//       success:false,
//       message:err.message
//     })
// }
// }