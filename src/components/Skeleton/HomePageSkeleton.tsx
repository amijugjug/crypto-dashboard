const HomePageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b bg-gray-300 h-6 rounded"></th>
            <th className="px-4 py-2 border-b bg-gray-300 h-6 rounded"></th>
            <th className="px-4 py-2 border-b bg-gray-300 h-6 rounded"></th>
            <th className="px-4 py-2 border-b bg-gray-300 h-6 rounded"></th>
            <th className="px-4 py-2 border-b bg-gray-300 h-6 rounded"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">
                <div className="bg-gray-300 h-6 rounded"></div>
              </td>
              <td className="px-4 py-2 border-b">
                <div className="bg-gray-300 h-6 rounded"></div>
              </td>
              <td className="px-4 py-2 border-b">
                <div className="bg-gray-300 h-6 rounded"></div>
              </td>
              <td className="px-4 py-2 border-b">
                <div className="bg-gray-300 h-6 rounded"></div>
              </td>
              <td className="px-4 py-2 border-b">
                <div className="bg-gray-300 h-6 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-gray-300 h-6 w-8 rounded"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
