import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import dashboradImg from '../assets/undraw_dashboard_p93p.svg';

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/campaigns/all') // update this URL if deployed
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  const totalCampaigns = campaigns.length;
  const totalAudience = campaigns.reduce((acc, c) => acc + (c.audience?.length || 0), 0);
  const totalSent = campaigns.reduce((acc, c) => acc + (c.stats?.sent || 0), 0);
  const totalFailed = campaigns.reduce((acc, c) => acc + (c.stats?.failed || 0), 0);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="p-4 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Campaigns" value={totalCampaigns} percentage="Total Created" icon="📢" />
            <DashboardCard title="Total Audience" value={totalAudience} percentage="Across All Campaigns" icon="👥" />
            <DashboardCard title="Sent Messages" value={totalSent} percentage="Successful Deliveries" icon="✅" />
            <DashboardCard title="Failed Messages" value={totalFailed} percentage="Delivery Issues" icon="⚠️" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
              <img 
                src={dashboradImg} 
                alt="Campaign Stats Illustration" 
                className="h-40 object-contain mx-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-4 text-blue-950">Upcoming Tasks</h2>
              <ul className="space-y-6 text-gray-700 text-base">
                <li className="flex items-center"><input type="checkbox" checked readOnly className="mr-2" /> Review AI Message Suggestions</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Configure Delivery Receipt API</li>
              </ul>
              <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded">+ Add Task</button>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
            <h2 className="text-xl font-bold mb-4 text-blue-950">Recent Campaign Logs</h2>
            <table className="min-w-full text-left">
              <thead className="border-b text-gray-800">
                <tr>
                  <th className="py-2">Campaign</th>
                  <th>Audience Size</th>
                  <th>Sent</th>
                  <th>Failed</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {campaigns.slice(0, 5).map((c, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{c.name}</td>
                    <td>{c.audience.length}</td>
                    <td>{c.stats?.sent || 0}</td>
                    <td>{c.stats?.failed || 0}</td>
                    <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, percentage, icon }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-green-500 text-sm mt-1">{percentage}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  </div>
);

export default Dashboard;
