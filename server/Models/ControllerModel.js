import mongoose from "mongoose";

const wlcSchema = mongoose.Schema({
    branch: String,
    name:String,
	model:String,
    serial: String,
    management_ip:String,
    software:String,
    support: String
})

const wlcModel = mongoose.model("WLC",wlcSchema, "wlc")

export default wlcModel