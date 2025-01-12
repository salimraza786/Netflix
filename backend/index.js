import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import  connectDB  from "./utils/database.js";


dotenv.config({
    path:".env"
})

connectDB()

const app = express();
//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:"https://netflix-frontend-lwup.onrender.com",
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/api/v1/user", userRoute);

const port = process.env.PORT || 8002

app.listen(port,() => {
    console.log(`Server listen at port ${port}`);
});
