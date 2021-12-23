import mongoose from "mongoose";

const mapSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    countryMap: {
      type: String,
      required: true,
    },
    cityMap: {
      type: String,
      required: true,
    },
    cityMapAdd: {
      type: String,
      required: true,
    },
    branch: [
      {
        address: { type: String },
        phone: { type: String },
        email: { type: String },
        lang: { type: String },
        lat: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Map = mongoose.model("map", mapSchema);

export default Map;
