const mongoose = require("mongoose");

// Define the schema
const CarSchema = new mongoose.Schema({
  name: String,
  price: String,
  manufacturingYear: String,
  owner: String,
  priceNegotiable: Boolean,
  fuel: String,
  kilometers: String,
  images: [String],
});

// Create a model
const Car = mongoose.models.Car || mongoose.model("Car", CarSchema);

export default Car;
