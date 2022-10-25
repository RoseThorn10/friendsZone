const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        usermame: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // validate
        },
        thoughts:
          // Array of _id values referencing the Thought model   
          [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
        friends: [
            // Array of _id values referencing the User model (self-reference)
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],


    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  // Initialize our Post model
  const User = model('user', userSchema);
  
module.exports = userSchema;