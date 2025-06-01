import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import dashboradImg from '../assets/undraw_dashboard_p93p.svg';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="p-4 space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Campaigns" value="12" percentage="4 Active" icon="📢" />
            <DashboardCard title="Customers" value="1,284" percentage="+ Growth" icon="👥" />
            <DashboardCard title="Delivery Rate" value="95%" percentage="Last Campaign" icon="📈" />
            <DashboardCard title="Segments" value="5" percentage="Custom Audiences" icon="🎯" />
          </div>

          {/* Graph + Tasks */}
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

          {/* Table */}
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
                <tr className="border-b">
                  <td className="py-2">Win-Back Users</td><td>600</td><td>540</td><td>60</td><td>May 25, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Holiday Sale</td><td>1200</td><td>1080</td><td>120</td><td>May 20, 2025</td>
                </tr>
                <tr>
                  <td className="py-2">Inactive Cleanup</td><td>300</td><td>270</td><td>30</td><td>May 18, 2025</td>
                </tr>
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
