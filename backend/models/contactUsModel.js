import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    value: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("contact", contactUsSchema);

export default ContactUs;
