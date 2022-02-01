import mongoose from "mongoose";

const emergencySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    nameEN: { type: String, required: true },
    nameAR: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true },
    icon: { type: String, default: "/images/defaultIcon.png" },
  },
  {
    timestamps: true,
  }
);

const Emergency = mongoose.model("emergency", emergencySchema);

export default Emergency;
