import mongoose from "mongoose";

const apSchema = mongoose.Schema({
    branch: String,
    controller:String,
    name:String,
	model:String,
    serial: String,
    management_ip:String,
    mac_address:String,
    description: String
})

const apModel = mongoose.model("ap",apSchema, "Access Points")

export default apModel