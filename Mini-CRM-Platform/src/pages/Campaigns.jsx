import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CampaignCard from '../components/CampaignCard';
import { useEffect, useState } from 'react';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [name, setName] = useState('');
  const [audienceInput, setAudienceInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/campaigns/all')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    const audience = audienceInput.split(',').map((a) => a.trim()).filter(Boolean);

    if (!name.trim()) {
      alert('Campaign name is required.');
      return;
    }
    if (audience.length === 0) {
      alert('Please provide at least one audience member.');
      return;
    }
    if (!message.trim()) {
      alert('Message cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/campaigns/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, audience, message }),
      });

      if (!res.ok) {
        const errData = await res.json();
        alert('Error creating campaign: ' + (errData.error || 'Unknown error'));
        setLoading(false);
        return;
      }

      const newCampaign = await res.json();

      setCampaigns([newCampaign, ...campaigns]);
      setName('');
      setAudienceInput('');
      setMessage('');
    } catch (err) {
      alert('Failed to create campaign: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Create Campaign</h2>
          <form onSubmit={handleCreate} className="mb-8 space-y-4 max-w-lg text-gray-600">
            <div>
              <label className="block mb-1 font-semibold">Campaign Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter campaign name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Audience (comma separated emails)</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-gray-600"
                value={audienceInput}
                onChange={(e) => setAudienceInput(e.target.value)}
                placeholder="e.g. user1@example.com, user2@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                className="w-full border rounded px-3 py-2 text-gray-600"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your campaign message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Campaign'}
            </button>
          </form>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Campaign History</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c, i) => (
              <CampaignCard
                key={i}
                name={c.name || 'name'}
                audienceSize={c.audience?.length || 0}
                sent={c.stats?.sent || 0}
                failed={c.stats?.failed || 0}
                date={new Date(c.createdAt).toLocaleDateString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
