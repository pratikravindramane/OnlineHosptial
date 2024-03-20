const mongoose = require("mongoose"); // Erase if already required
const Schema = mongoose.Schema;

const TrainingSchema = new Schema(
  {
    disease: { type: String, required: true },
    age: { type: Number, require: true },
    gender: { type: String, default: "both" },
    chestPain: { type: Number, require: true },
    sugar: { type: Number, require: true },
    restecg: { type: Number, require: true },
    exang: { type: Number, require: true },
    slope: { type: Number, require: true },
    ca: { type: Number, require: true },
    thal: { type: Number, require: true },
    bp: { type: Number, require: true },
    cholestarol: { type: Number, require: true },
    thalach: { type: Number, require: true },
    oldPeak: { type: Number, require: true },
  },
  { timeStamp: true }
);
module.exports = mongoose.model("Training", TrainingSchema);
