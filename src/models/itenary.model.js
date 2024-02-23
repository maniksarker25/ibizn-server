const mongoose = require("mongoose");


const cabinsSchema = new mongoose.Schema({
 cabinName:{
  type:String, 
  require:true
 },
 cabinPrice:{
  type: String,
  require:true
 } 
})

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  itineraryName: {
    type: String,
    required: true,
  },
  cabins: [
    {
      type: cabinsSchema,
      default:{}
    }
  ],
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  disembarkationPoints: {
    type: String,
    required: true,
  },
  embarkationPoints: {
    type: String,
    required: true,
  },
  itineraryDescription: {
    type: String,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  numberOfDives: {
    type: Number,
    required: true,
  },
  numberOfNights: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
