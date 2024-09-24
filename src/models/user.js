const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
        required: "Email address is required",
        validate: {
            validator: v => {
                if (v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                }
            },
            message: "{VALUE} is not a valid email address"
        },
    },
    user_id:{
        type:Schema.Types.ObjectId,
        // required: true
    },
    created_by_id:{
        type: Schema.Types.ObjectId,
        // required:true,
    },
    timestamps:{
        created_at:{
            type: Date,
            default: Date.now
        }
    },
    updated_at:{
        type:Date,
        default: Date.now
    },
    token:{
        type:String
    },
    tokenExpiration:{
        type:Date
    },
    password:{
        type:String
    }
});
const Users = mongoose.model("Users", UserSchema);
module.exports = Users;