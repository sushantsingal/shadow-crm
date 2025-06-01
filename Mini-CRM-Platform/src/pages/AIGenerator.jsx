import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const AIGenerator = () => {
  const [goal, setGoal] = useState('');
  const [messages, setMessages] = useState([]);

  const generateMessages = async () => {
    if (!goal) return;
    setMessages([
      `Hey there! Looking for ${goal}? We’ve got something special for you.`,
      `Boost your experience with our exclusive ${goal} offer.`,
      `Let’s make your ${goal} plan a success – don’t miss out!`
    ]);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="text-gray-800 p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">AI Marketing Message Generator</h2>
          <div className="bg-white rounded-xl shadow p-4 space-y-4">
            <input
              type="text"
              placeholder="Enter your campaign goal..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              onClick={generateMessages}
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Generate Messages
            </button>

            {messages.length > 0 && (
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">Suggested Messages</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
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