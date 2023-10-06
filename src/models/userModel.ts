import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the "nextusers" collection and use the userSchema
const NextUser = mongoose.models.nextusers || mongoose.model('nextusers', userSchema);

export default NextUser;