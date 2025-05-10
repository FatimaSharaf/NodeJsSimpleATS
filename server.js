const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI,{


}).then(()=>console.log("MongoDB connected")).catch((err)=>console.error("Monogdb connection error",err))


const companyRoutes = require("./routes/company");
const hiringManagerRoutes = require("./routes/hiringManager");
const jobRoutes = require("./routes/job");
const applicantRoutes = require("./routes/applicant");


app.use("/companies", companyRoutes);
app.use("/hiringManagers", hiringManagerRoutes);
app.use("/jobs", jobRoutes);
app.use("/applicants", applicantRoutes);


const Port =process.env.PORT||5000

app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
});
