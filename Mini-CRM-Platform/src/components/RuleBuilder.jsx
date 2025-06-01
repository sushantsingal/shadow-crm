// RuleBuilder.jsx
import React from 'react';

const RuleBuilder = ({ rules, setRules }) => {
  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const updateRule = (index, key, value) => {
    const updated = [...rules];
    updated[index][key] = value;
    setRules(updated);
  };

  return (
    <div className="space-y-4">
      {rules.map((rule, index) => (
        <div key={index} className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Field"
            value={rule.field}
            onChange={(e) => updateRule(index, 'field', e.target.value)}
            className="px-3 py-2 border rounded w-1/4"
          />
          <select
            value={rule.operator}
            onChange={(e) => updateRule(index, 'operator', e.target.value)}
            className="px-3 py-2 border rounded w-1/4"
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
            className="px-3 py-2 border rounded w-1/4"
          />
        </div>
      ))}
      <button onClick={addRule} className="bg-indigo-500 text-white px-4 py-2 rounded">
        + Add Rule
      </button>
    </div>
  );
};

export default RuleBuilder;
