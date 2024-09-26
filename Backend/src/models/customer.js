const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
},
phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: {
      validator: v => {
        if (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        }
      },
      message: "{VALUE} is not a valid email address"
    }
  },
  admin_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  timestamps: {
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  },
  hasUserAccepted: {
    type: Boolean,
    default: false
  },
  policyAcceptedAt:
  {
    type: Date,
  },

  profileImage: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  token: {
    type: String
  },
  tokenExpiration: {
    type: Date
  },
  stores: [{ type: Schema.Types.ObjectId, ref: "Store" }],
  device_token: [{ type: String }],
  notification:{
    type : String,
    default: "enabled"
  }
});

const customer = mongoose.model("customer" , customerSchema);

module.exports = customer