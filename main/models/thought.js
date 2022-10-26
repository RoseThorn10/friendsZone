const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const date_format = require('../../utils/dateFormat');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => date_format(createdAtVal)
        },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        reactionSchema
    ],
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;