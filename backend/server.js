import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import campaignRoutes from './routes/campaign.js';
import vendorRoutes from './routes/vendor.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/campaigns', campaignRoutes);
app.use('/api/vendor', vendorRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error('DB connection error:', err));

