import mongoose from "mongoose";

const lawPostsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title: {
      type: String,
      required: true,
    },
    describtion: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    pictures: [String],
    tags: [String],
    state: {
      type: String,
      default: "active",
    },
    counter: {
      type: Number,
      default: 0,
    },
    video: {
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

const LawPosts = mongoose.model("lawPost", lawPostsSchema);

export default LawPosts;
