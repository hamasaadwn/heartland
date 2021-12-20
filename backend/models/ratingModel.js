import mongoose from "mongoose";

const RatingSchema = mongoose.Schema(
  {
    rate: {
      type: Number,
      min: 0,
      max: 5,
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
