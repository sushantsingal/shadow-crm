import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CampaignCard from '../components/CampaignCard';

const Campaigns = () => {
  const dummyCampaigns = [
    { name: 'Win-Back Users', audienceSize: 600, sent: 540, failed: 60, date: 'May 25, 2025' },
    { name: 'Holiday Sale', audienceSize: 1200, sent: 1080, failed: 120, date: 'May 20, 2025' },
    { name: 'Inactive Cleanup', audienceSize: 300, sent: 270, failed: 30, date: 'May 18, 2025' }
  ];

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
            {dummyCampaigns.map((c, i) => (
              <CampaignCard key={i} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
