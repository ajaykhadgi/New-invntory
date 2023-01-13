const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        name:{
            type: String,
            require:[true,"Please add a name"]
        },
        email:{
            type: String,
            require:[true,"Please add a Email"],
            uniqu: true,
            trim: true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"please enter a valid email"
            ]
        },
        password:{
            type:String,
            require:[true,"Please add a Password"],
            minLength:[8,"Password must be up to 8 characters"],
            maxLength:[23,"Password must not  be  more than  23 characters"]
        }, 
        photo:{
            type: String,
            require:[true,"Please add a photo"],
            default:"https://imgs.search.brave.com/s9gOCGUhPdR4aKXU5-9vyxwzcQqDjxqPoGr_J48Wu5Y/rs:fit:900:641:1/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydGtleS5j/b20vbXBuZ3MvbS8x/NDYtMTQ2MTQ3M19k/ZWZhdWx0LXByb2Zp/bGUtcGljdHVyZS10/cmFuc3BhcmVudC5w/bmc"
        },
        phone:{
            type: String,
            default:"+977"
        },
        bio:{
                type: String,
                maxLength:[250,"Bio must  not more than 250 characters"],
                default:"bio"
        },
    },
    {
        timestamps: true,

    }
)
const User = mongoose.model("User",userSchema)
module.exports = User