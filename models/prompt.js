import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "El prompt es requerido"],
  },
  tag: {
    type: String,
    required: [true, "La etiqueta es requerida"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
