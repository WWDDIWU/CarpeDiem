'use strict';

const mongoose = require('mongoose');
const types = require('./types');
const LocationID = types.LocationID;
const DayID = types.DayID;
const Checksum = types.Checksum;

const Device = mongoose.Schema({
   lastUpdate: Number,
   type: {
       type: Number,
       validate: {
           validator: function (value) {
               return (value < 3 && value > -1);
           },
           message: '{VALUE} is not a valid device type!'
       }
   }
});

const UserSchema = mongoose.Schema({
	_id: String,
	firstname: String,
	lastname: String,
    password: String,
    salt: String,
    email: String,
    devices: [Device],
    relevantPlaces: {
        home: mongoose.Schema.Types.LocationID,
        work: mongoose.Schema.Types.LocationID,
        other: [mongoose.Schema.Types.LocationID]
    },
    unit: {
        type: Number,
        validate: {
            validator: function (v) {
                return (v < 2 && v >= 0);
            },
            message: '{VALUE} is not a valid unit type!'
        }
    },
    timeline: [mongoose.Schema.Types.DayID]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
