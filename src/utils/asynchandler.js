import { Promise } from "mongoose"

const asyncHandler=(rquestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
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