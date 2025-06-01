import fetch from 'node-fetch';
const apiKey = process.env.OPENAI_API_KEY;

export async function generateMessages(goal) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Generate 3 short marketing messages for the goal: ${goal}`,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.7
    })
  });

  const data = await response.json();
  const output = data.choices[0].text.trim().split('\n').filter(Boolean);
  return output;
}
