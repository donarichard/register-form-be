import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from '../api';
const app = express();

// development logs
app.use(morgan("dev"));
app.use(express.json())
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
app.use(cors(corsOpts));
app.options("*", cors());
//Routers
app.get('/',(req,res)=>{
  res.send('Welcome to project')
})
app.use("/api/v1/", router);
export default app;
