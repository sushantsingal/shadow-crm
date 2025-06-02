import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  audience: {
    type: [String],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  stats: {
    sent: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
  },
}, { timestamps: true });

export default mongoose.model('Campaign', CampaignSchema);
