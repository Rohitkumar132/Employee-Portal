const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      fatherName: {
        type: String
      },
      motherName: {
        type: String
      },
      aadhaar_number: {
        type: String,
      },
      pan_number: {
        type: String,
      },
      education: {
        type: String
      },
      biometric_id: {
        type: String
      },
      username: {
        type: String,
        unique: true,
        index: true,
        required: true,
      },
      active: {
        type: Boolean,
      },
      role: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
      },
      passwordHash: {
        type: String,
        required: true,
      },
      joining_date: {
        type: Date,
      },
      email: {
        type: String,
      },
      official_email: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      address: {
        type: String,
      },
      perm_address: {
        type: String,
      },
      dob: {
        type: Date,
      },
      weekly_off: {
        type: String,
      },
      hasPolicyAccepted: {
        type: Boolean,
        default: false
      },
      itPolicyAcceptance: {
        type: Boolean,
        default: false
      },
      esic: {
        type: String,
      },
      epfo: {
        type: String,
      },
      shift: {
        type: String,
      },
      reportStats: {
        theftReported: {
          type: Number,
          default: 0
        },
        theftPrevented: {
          type: Number,
          default: 0
        },
        Declined: {
          type: Number,
          default: 0
        }
      },
      employee_category: [
        {
          type: String,
        }
      ],
      logs: [
        {
          log_name: { type: String },
          log_type: { type: String },
          updated_by: { type: String },
          previous_value: { type: String },
          updated_value: { type: String },
          updated_by_id: {
            type: Schema.Types.ObjectId,
            ref: "Employee"
          },
          date: {
            type: Date,
            default: Date.now
          },
        }
      ],
    
      allocated_under: {
        TeamLeadId: { type: Schema.Types.ObjectId },
        TeamLeadName: { type: String },
      },
      leaving_date: {
        type: Date,
      },
      opfin_id: {
        type: Number
      },
      admin_id: {
        type: Schema.Types.ObjectId,
        // required: true,
      },
      show_banner: {
        type: Boolean,
      },
      travel_allowance: {
        type: Number
      },
      show_referral: {
        type: Boolean,
        default: true
      },
      show_store_alert: {
        type: Boolean,
        default: true,
      },
      hasUserChangedPassword: {
        type: Boolean,
        default: false,
      },
      token: {
        type: String
      },
      tokenExpiration: {
        type: Date
      },
      warnings_issued:
      {
        type: Number,
        default: 0
      },
      terminate_reason: {
        type: String
      },
      timestamps: {
        created_at: {
          type: Date,
          default: Date.now,
        },
        updated_at: {
          type: Date,
          default: Date.now,
        },
        convert_date: {
          type: Date,
        },
      },
      appraisal_month: {
        type: String,
      },
      probation:{
        type : String
      },
      probation_completed_on:{
        type : Date
      },
      extended_month: {
        type : String
      },
      last_logintime:{
        type : Date
      },
      action:{
        type : String
      },
      face_auth:{
        type : String,
        default:"pending"
      }
})

const Employee = mongoose.model("Employee" , employeeSchema);
module.exports = Employee;