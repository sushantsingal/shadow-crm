import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CampaignCard from '../components/CampaignCard';
import { useEffect, useState } from 'react';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://shadow-crm-backend.vercel.app/api/campaigns/all')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Campaign History</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c, i) => (
              <CampaignCard
                key={i}
                name={c.name || 'Untitled'}
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
