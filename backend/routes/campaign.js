import express from 'express';
import Campaign from '../models/Campaign.js';
import { generateMessages } from '../utils/openai.js';
const router = express.Router();

router.post('/create', async (req, res) => {
  const { audience, message } = req.body;
  try {
    const sent = Math.floor(audience.length * 0.9);
    const failed = audience.length - sent;
    const campaign = await Campaign.create({ audience, message, stats: { sent, failed } });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/ai-message', async (req, res) => {
  const { goal } = req.body;
  try {
    const messages = await generateMessages(goal);
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: 'AI generation failed' });
  }
});

router.get('/all', async (req, res) => {
  const data = await Campaign.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
