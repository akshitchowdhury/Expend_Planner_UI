import React, { useEffect, useState } from 'react';

const PaginationTwo = () => {
  const [shopItems, setShopItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products', {
      method: 'GET',
    });
    const data = await response.json();
    setShopItems(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(shopItems.length / itemsPerPage);
  const currentPageItems = shopItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="p-4 text-sm font-medium">Sr No.</th>
              <th className="p-4 text-sm font-medium">Products</th>
            </tr>
          </thead>
          <tbody>
            {currentPageItems.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="p-4 text-sm text-gray-600">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="p-4 text-sm text-gray-600">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationTwo;
