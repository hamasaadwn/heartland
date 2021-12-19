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
    socialMedia: [
      {
        address: { String },
        phone: { String },
        email: { String },
        lang: { String },
        lat: { String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Map = mongoose.model("map", mapSchema);

export default Map;
