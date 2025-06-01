import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  name: String,
  audience: Array,
  message: String,
  stats: {
    sent: Number,
    failed: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Campaign', CampaignSchema);
