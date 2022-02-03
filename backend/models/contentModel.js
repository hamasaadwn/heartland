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
    },
    contentAr: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
