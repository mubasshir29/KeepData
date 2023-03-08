import mongoose from "mongoose";

const switchSchema = mongoose.Schema({
    branch: String,
    switch_name:String,
    ip_address:String,
    model:String,
    serial_no:String,
    software:String,
    support: String
})

const switchModel = mongoose.model("switch",switchSchema, "Switches")

export default switchModel;