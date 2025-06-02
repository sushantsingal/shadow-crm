import express from 'express';
import Campaign from '../models/Campaign.js';
import { generateMessages } from '../utils/openai.js';

const router = express.Router();


router.post('/create', async (req, res) => {
  const { audience, message } = req.body;

  if (!audience || !Array.isArray(audience) || audience.length === 0) {
    return res.status(400).json({ error: 'Audience list is required and must be an array.' });
  }

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string.' });
  }

  try {
    const sent = Math.floor(audience.length * 0.9);
    const failed = audience.length - sent;

    const campaign = await Campaign.create({
      audience,
      message,
      stats: { sent, failed },
    });

    res.status(201).json(campaign);
  } catch (err) {
    console.error('[CREATE_CAMPAIGN_ERROR]', err);
    res.status(500).json({ error: 'Server error while creating campaign.' });
  }
});


router.post('/ai-message', async (req, res) => {
  const { goal } = req.body;

  if (!goal || typeof goal !== 'string') {
    return res.status(400).json({ error: 'Campaign goal must be a non-empty string.' });
  }

  try {
    const messages = await generateMessages(goal);
    res.json({ messages });
  } catch (err) {
    console.error('[AI_GENERATION_ERROR]', err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});


router.get('/all', async (req, res) => {
  try {
    const data = await Campaign.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.error('[FETCH_CAMPAIGNS_ERROR]', err);
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

export default router;
