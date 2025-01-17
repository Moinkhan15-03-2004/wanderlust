const mongoose = require('mongoose');
const  initData = require("./data.js");
const Listing=require("../models/listing.js");






main().then(()=>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
}

const initDB= async ()=>{
    await Listing.deleteMany({});
   initData.data= initData.data.map((obj)=>({...obj,owner:'671a7fa0be06eaa9f7e7dc80'}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();