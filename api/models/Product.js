const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new.mongoose.Schema(
    {
        title:{ type:String, require:true, unique:true},
        description:{type:String, required:true},
        img: {type:String, required:true},
        categories: {type:Array},
        size: {type:String},
        color: {type:String},
        price: {type:String, required:true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);