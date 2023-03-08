import mongoose from "mongoose";

const internetSchema = mongoose.Schema({
    branch: String,
    isp:String,
    type: String,
    account_no: String,
    account_holder: String,
    bandwidth: String,
    support: String,
    comments: String
})

const internetConnectionModel = mongoose.model("Internet",internetSchema, "Internet_Connections")

export default internetConnectionModel;