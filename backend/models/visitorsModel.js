import mongoose from "mongoose";

const VisitorSchema = mongoose.Schema({
  visitors: {
    type: Number,
  },
});

const Visitor = mongoose.model("visitor", VisitorSchema);

export default Visitor;
