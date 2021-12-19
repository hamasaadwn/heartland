import mongoose from "mongoose";

const contentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    contentEn: {
      type: String,
      required: true,
    },
    contentKu: {
      type: String,
      required: true,
    },
    contentAr: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("content", contentSchema);

export default Content;
