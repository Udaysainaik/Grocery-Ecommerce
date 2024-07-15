import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://udaysainaik:7386660748@cluster0.tqrtgk3.mongodb.net/Ecommerce').then(()=>console.log("DB connected"));
}