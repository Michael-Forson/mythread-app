const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true, // Ensure email is required for proper validation
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  joinDate: {
    // Corrected the typo from `joinData` to `joinDate`
    type: Date,
    default: Date.now,
  },
  sentFollowRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
});

// Export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
