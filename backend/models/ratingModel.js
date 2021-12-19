import mongoose from "mongoose";

const RatingSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    scope: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("rating", RatingSchema);

export default Rating;
