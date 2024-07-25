const CryptoDetailsSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 animate-pulse">
      <div className="flex flex-col space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between">
            <span className="bg-gray-300 h-4 w-1/4 rounded"></span>
            <span className="bg-gray-300 h-4 w-1/4 rounded"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDetailsSkeleton;
