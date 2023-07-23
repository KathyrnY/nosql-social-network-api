const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
          return createdAt.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
          });
        },
      },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reactionSchema;