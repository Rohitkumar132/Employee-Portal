const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = Schema({
    name: {
        type: String,
        required: true
      },
      store_code: {
        type: String,
      },
      address: {
        type: String,
        required: true,
      },
      storeImage: {
        type: String,
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
      },
      timezone: {
        type: String,
      },
      configs: {
        remote_sharing: [RemoteSharingSchema],
        video_server: [VideoServerScehma],
        camera_server: [CameraServerSchema],
        third_party_dvr: [ThirdPartyDvrSchema],
        router_config: [RouterConfigSchema],
        special_comments: [SpecialCommentsSchema],
        notes: [SpecialCommentsSchema],
        nest_geo_cam: [NestGeoCameraSchema],
        media_service: [MediaServiceSchema],
        vms_super_user: [VMSSuperuserSchema],
        other: [otherConfigSchema],
      },
    
      store_phoneNumber: {
        validate: {
          validator: (v) => {
            if (v) {
              return /^(\+\d{1,2}\s)?\(?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
                v
              );
            }
          },
          message: "{VALUE} is not a valid phone number!",
        },
        type: String,
        required: true,
      },
      media: [media],
    
      date_added:
      {
        type: Date,
        // default: Date.now
      },
    // Date when store monitoring started.
      activation_date:
      {
        type: Date,
      },
    // Date when store got locked.
      lock_date:
      {
        type: Date,
      },
      store_lock_reason:{
        type: String,
      },
      store_configs_status:
      {
        remote_sharing_status: { type: Boolean, default: false },
        video_server_status: { type: Boolean, default: false },
        camera_server_status: { type: Boolean, default: false },
        media_service_status: { type: Boolean, default: false },
        router_config_status: { type: Boolean, default: false },
        vms_super_user_status: { type: Boolean, default: false }
      },
      store_config_completed: {
        type: Boolean,
        default: false
      },
      nest_account: {
        type: String,
      },
      authorized_contacts_details: {
        store_owner: {
          status: {
            type: String,
            default: "Pending"
          },
          availability: {
            type: String,
            default: "Pending"
          }
        },
        store_manager: {
          status: {
            type: String,
            default: "Pending"
          },
          availability: {
            type: String,
            default: "Pending"
          }
        },
        store_cashier: {
          status: {
            type: String,
            default: "Pending"
          },
          availability: {
            type: String,
            default: "Pending"
          }
        },
      },
      incentives: {
        customer: {
          prevented: {
            currentAmount: { type: Number, Default: 50 },
            previousValues: [IncentiveLog],
          },
          reported: {
            currentAmount: { type: Number, Default: 25 },
            previousValues: [IncentiveLog],
          },
        },
        cashier: {
          fraud: {
            currentAmount: { type: Number, Default: 500 },
            previousValues: [IncentiveLog],
          },
          suspicious: {
            currentAmount: { type: Number, Default: 25 },
            previousValues: [IncentiveLog],
          }
        },
      },
      active: {
        type: Boolean,
        default: true,
      },
      pos_name: {
        type: String,
      },
      pos_qty: {
        type: String,
      },
      timings: {
        type: String,
      },
      timings_category: {
        type: String,
      },
      store_incentive_category: {
        type: String
      },
      timings_other: {
        type: String,
      },
      timings_category_other: {
        type: String,
      },
      timings_category_tertiary: {
        type: String,
      },
      timings_tertiary: {
        type: String,
      },
      timings_category_tertiary_other: {
        type: String,
      },
      timings_tertiary_other: {
        type: String,
      },
      store_category: {
        type: String
      },
      owner: { type: Schema.Types.ObjectId, ref: "Customer" }
})

const Store = mongoose.model("stores" , storeSchema);

module.exports;