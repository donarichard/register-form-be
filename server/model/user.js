const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Candidate model design.
 * @returns {mongooseModel} it returns the schema model of Model
 */
const user = new Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
    },
    hash: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);
user.index(
  {
    email: 1,
  },
  {
    unique: true,
  }
);
export default mongoose.model("User", user);
