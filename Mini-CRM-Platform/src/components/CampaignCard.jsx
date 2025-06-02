const CampaignCard = ({ name, audienceSize, sent, failed, date }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition duration-200">
      <h3 className="text-lg font-semibold mb-1 text-gray-800 truncate">{name}</h3>
      <p className="text-sm text-gray-600">Audience: {audienceSize}</p>
      <p className="text-sm text-green-600">Sent: {sent}</p>
      <p className="text-sm text-red-500">Failed: {failed}</p>
      <p className="text-xs text-gray-400 mt-1">{date}</p>
    </div>
  );
};

export default CampaignCard;
