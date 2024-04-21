const { Schema, model } = require("mongoose");

const accommodationABoat = new Schema({
  Picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Schedules = new Schema({
  tripStart: {
    type: Date,
    required: true,
  },
  tripEnd: {
    type: Date,
    required: true,
  },
  itinerary: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  discount: {
    type: new Schema({
      name: {
        type: String,
        required: true,
      },
      percent: {
        type: Number,
        required: true,
      },
    }),
    required: true,
  },
  special: {
    type: Boolean,
    default: false,
  },
});

const divingSchema = new Schema({
  Picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const foodOnboardSchema = new Schema({
  Picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const liveABoard = new Schema(
  {
    Picture: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// environmental question schema --------------------
const environmentalQuestionSchema = {
  q1: {
    type: String,
  },
  q2: {
    type: String,
  },
  q3: {
    type: String,
  },
  q4: {
    type: String,
  },
  q5: {
    type: String,
  },
  q6: {
    type: String,
  },
  q7: {
    type: String,
  },
  q8: {
    type: String,
  },
  q9: {
    type: String,
  },
  q10: {
    type: String,
  },
  q11: {
    type: String,
  },
  q12: {
    type: String,
  },
  q13: {
    type: String,
  },
  q14: {
    type: String,
  },
  q15: {
    type: String,
  },
};
const cabinsSchema = new Schema(
  {
    name: { type: String, required: true },
    pictures: { type: String, required: true },
  },
  { timestamps: true }
);
const boatSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    nameOfProperty: {
      type: String,
      required: true,
    },
    liveABoard: {
      type: liveABoard,
      default: {},
    },
    accommodation: {
      type: accommodationABoat,
      default: {},
    },
    diving: {
      type: divingSchema,
      default: {},
    },
    foodOnboard: {
      type: foodOnboardSchema,
      default: {},
    },
    facilities: [{ type: String }],

    carousal: [{ type: String }],
    equipment: [{ type: String }],
    diveCourses: [{ type: String }],
    cabins: [
      {
        type: cabinsSchema,
      },
    ],
    inclusions: [{ type: String }],
    exclusions: [{ type: String }],
    environmentalQuestions: {
      type: environmentalQuestionSchema,
    },
    schedules: [
      {
        type: Schedules,
        default: {},
      },
    ],
    status: {
      type: String,
      default: "pending",
    },
    environmentalRating: {
      type: Number,
    },
    veganRating: {
      type: Number,
      max: 5,
      min: 0,
    },
    // foodBasedQuestionAnswer: {
    //   type: String,
    // },
    resitricted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Boat = model("Boat", boatSchema);

module.exports = Boat;
