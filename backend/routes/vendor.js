import express from 'express';
import Campaign from '../models/Campaign.js';
const router = express.Router();

router.post('/receipt/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const campaign = await Campaign.findById(id);
    if (!campaign) return res.status(404).json({ error: 'Not found' });

    if (status === 'SENT') campaign.stats.sent++;
    else campaign.stats.failed++;
    await campaign.save();

    res.json({ message: 'Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
