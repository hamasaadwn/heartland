import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    phone: [String],
    email: [String],
    socialMedia: [{
        socialMedia: {String},
        link: {String}
    }],
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("contact", contactUsSchema);

export default ContactUs;
