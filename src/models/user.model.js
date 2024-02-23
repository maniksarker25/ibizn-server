const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/index");

const localBankSchema = new Schema(
  {
    bankName: {
      type: String,
      required: true,
    },
    routingNumber: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const wiseSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const bankAccountSchema = new Schema(
  {
    localBank: localBankSchema,
    wiseBank: wiseSchema,
  },
  {
    timestamps: true,
  }
);
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    whatsapp: {
      type: String,
    },
    companyName: {
      type: String,
      require: true,
    },
    companyAddress: {
      type: String,
    },
    password: {
      type: String,
      require: true,
      // select: 0,
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    // bankAccount: {
    //   type: bankAccountSchema,
    // },
    role: {
      type: String,
      default: "operator",
    },
    status: {
      type: String,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// middleware for password hash---------------
userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});
userSchema.post("save", function (doc, next) {
  doc.set("password", undefined);
  doc.set("orders", undefined);
  next();
});

const User = model("User", userSchema);

module.exports = User;
