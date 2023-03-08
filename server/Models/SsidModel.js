import mongoose from "mongoose";

const ssidSchema = mongoose.Schema({
    branch: String,
    controller:String,
	ssid:String,
    password: String,
    description: String
})

const ssidModel = mongoose.model("ssid",ssidSchema, "SSIDs")

export default ssidModel