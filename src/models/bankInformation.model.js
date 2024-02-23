const { Schema, model } = require("mongoose");
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
const bankInformationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    localBank: localBankSchema,
    wiseBank: wiseSchema,
  },
  {
    timestamps: true,
  }
);

const BankInformation = model("BankInformation", bankInformationSchema);

module.exports = BankInformation;
