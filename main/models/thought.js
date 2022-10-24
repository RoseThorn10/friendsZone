const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    {
        username: {
            type: String,
            required: true,
        }
    },
    {
        // reactions (These are like replies)

        // Array of nested documents created with the reactionSchema   
    },    
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  // Initialize our Post model
  const Thought = model('thought', thoughtSchema);
  
module.exports = userSchema;