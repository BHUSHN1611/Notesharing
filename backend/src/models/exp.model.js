import mongoose, { Schema } from 'mongoose';

const expSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    cloudinaryId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      trim: true,
      lowercase:true,
    },
    subject:{
      type: String,
      required: true,
      trim: true,
      lowercase:true,
    }
},{timestamps:true})

export const Exp = mongoose.model("Exp",expSchema)

