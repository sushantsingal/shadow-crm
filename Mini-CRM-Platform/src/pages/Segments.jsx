import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Segments = () => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '' }]);

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const updateRule = (index, key, value) => {
    const updated = [...rules];
    updated[index][key] = value;
    setRules(updated);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="p-4 text-gray-900">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Build a Customer Segment</h2>
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Field"
                  value={rule.field}
                  onChange={(e) => updateRule(index, 'field', e.target.value)}
                  className="px-3 py-2 border rounded w-full sm:w-1/3"
                />
                <select
                  value={rule.operator}
                  onChange={(e) => updateRule(index, 'operator', e.target.value)}
                  className="px-3 py-2 border rounded w-full sm:w-1/3"
                >
                  <option value="">Operator</option>
                  <option value="==">Equals</option>
                  <option value="!=">Not Equal</option>
                  <option value=">">Greater Than</option>
                  <option value="<">Less Than</option>
                </select>
                <input
                  type="text"
                  placeholder="Value"
                  value={rule.value}
                  onChange={(e) => updateRule(index, 'value', e.target.value)}
                  className="px-3 py-2 border rounded w-full sm:w-1/3"
                />
              </div>
            ))}
            <button onClick={addRule} className="bg-indigo-500 text-white px-4 py-2 rounded">
              + Add Rule
            </button>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Preview Rules</h3>
              <pre className="bg-white p-4 rounded shadow text-sm overflow-auto">
{JSON.stringify(rules, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
