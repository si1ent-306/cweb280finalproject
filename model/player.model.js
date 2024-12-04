const mongoose = require('mongoose');
// _id:672d28425dbfc370b4e06dfd
// fName:"John"
// lname:"Smith"
// number:1
// 1position:"Goalkeeper"
// 2position:null
// dob:"2000-05-18"
// country:"Canada"
// on-team-since:"2020-06-10"
// left-team-on:null
// came-from:"Vancouver Whitecaps FC"
// went-to: null
const PlayerSchema =  mongoose.Schema(
    {
        fName: {
            type: String,
            required: [true, 'Please be a name'],
        },
        lName: {
            type: String,
            required: [true, 'Please be a name'],
        },
        number: {
            type: Number,
            required: [true, 'Please be a number'],
        },
        fisrtposition: {
            type: String,
            required: [false, 'Please be a position'],
        },
        secondposition: {
            type: String,
            required: [false, 'Please be a position'],
        },
        dob: {
            type: String,
            required: [false, 'Please be a date'],
        },
        country: {
            type: String,
            required: [false, 'Please be a country'],
        },
        'on-team-since': {
            type: String,
            required: [false, 'Please be a date'],
        },
        'left-team-on': {
            type: String,
            required: [false, 'Please be a date'],
        },
        'came-from': {
            type: String,
            required: [false, 'Please be a name'],
        },
        'went-to': {
            type: String,
            required: [false, 'Please be a name'],
        }
    },
    {
        timestamps: true
    }
);

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;
