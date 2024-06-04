const { Schema, model } = require("mongoose");

// schema for food-------------------
const foodSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// schema for accommodation -----------------------
const accommodationSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// schema for diving
const divingSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

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

// schema for rooms ----------
const roomSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// deactivationPeriod schema
const deactivationPeriodSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});
// discountTimeFrame schema --
const discountTimeFrameSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});
const resortSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    propertyName: {
      type: String,
      required: true,
    },
    featureImage: {
      type: String,
      required: true,
    },
    deactivationPeriod: {
      type: deactivationPeriodSchema,
    },
    briefDescription: {
      type: String,
      required: true,
    },
    briefImage: {
      type: String,
      required: true,
    },

    accommodation: {
      type: accommodationSchema,
      required: true,
    },

    diving: {
      type: divingSchema,
      required: true,
    },

    food: {
      type: foodSchema,
      required: true,
    },
    carousalImages: {
      type: [String],
      required: true,
    },
    facilities: {
      type: [String],
      required: true,
    },
    listOfPackages: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Package",
          required: true,
        },
      ],
      required: true,
    },

    rooms: {
      type: roomSchema,
      required: true,
    },
    inclusions: {
      type: [String],
      required: true,
    },
    exclusions: {
      type: [String],
      required: true,
    },
    equipment: {
      type: [String],
      required: true,
    },
    diveCourses: {
      type: [String],
      required: true,
    },
    discount: {
      type: String,
    },
    discountTimeFrame: {
      type: discountTimeFrameSchema,
    },
    environmentalQuestions: {
      type: environmentalQuestionSchema,
    },
    special: {
      type: Boolean,
      default: false,
    },
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

const Resort = model("Resort", resortSchema);

module.exports = Resort;
