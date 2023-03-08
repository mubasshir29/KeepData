import mongoose from "mongoose";

const firewallSchema = mongoose.Schema({
    branch: String,
    name:String,
	model:String,
    serial: String,
    management_ip:String,
    software:String,
    support: String
})

const firewallModel = mongoose.model("firewall",firewallSchema, "Firewalls")

export default firewallModel;