import mongoose from "mongoose";

const branchSchema = mongoose.Schema({
    name:String,
    branch_code: String,
    location:String,
	contact: String
})

const branchModel = mongoose.model("branch",branchSchema, "Branches")

export default branchModel;