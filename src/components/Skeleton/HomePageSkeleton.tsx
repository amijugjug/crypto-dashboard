const HomePageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col space-y-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border-b border-gray-300"
          >
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
