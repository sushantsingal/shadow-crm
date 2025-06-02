import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const AIGenerator = () => {
  const [goal, setGoal] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const generateMessages = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    setMessages([]);

    setTimeout(() => {
      const generated = [
        `👋 Hey there! Looking for "${goal}"? We’ve tailored something just for you.`,
        `🚀 Supercharge your results with our top-notch "${goal}" strategy.`,
        `💡 Let’s turn your "${goal}" into success – we’ve got just the tools.`,
        `🎯 Maximize your reach with a campaign centered on "${goal}".`,
      ];

      setMessages(generated);
      setHistory(prev => [...prev, { goal, generated }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="text-gray-800 p-4">
          <h2 className="text-2xl font-bold mb-6">🤖 AI Marketing Message Generator</h2>
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <input
              type="text"
              placeholder="Enter your campaign goal..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              onClick={generateMessages}
              disabled={loading}
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Messages"}
            </button>

            {loading && (
              <div className="text-indigo-600 animate-pulse">🤔 Thinking like a marketer...</div>
            )}

            {messages.length > 0 && (
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">💬 AI Suggestions</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            {history.length > 1 && (
              <div className="pt-6 border-t">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">🔁 Previous Campaigns</h4>
                <ul className="text-sm text-gray-500 list-disc pl-5">
                  {history.slice(0, -1).reverse().map((item, index) => (
                    <li key={index}>"{item.goal}" campaign</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGenerator;
