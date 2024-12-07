import React, { useEffect, useState } from "react";

const PaginationTest = () => {
  const [products, setProducts] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = products.length / itemsPerPage;

  const currentPageItems = products.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Product List
      </h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Serial Number</th>
              <th className="px-4 py-2 text-left">Product Name</th>
            </tr>
          </thead>
          <tbody>
            {currentPageItems.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } hover:bg-gray-300 transition-colors duration-200`}
              >
                
                <td className="px-4 py-2 border-t border-gray-300">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {item.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
      <button onClick={()=>(setCurrentPage(currentPage-1))}>Previous Page</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-400 hover:text-white transition-colors duration-200`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={()=>(setCurrentPage(currentPage+1))}>Next Page</button>
      </div>
    </div>
  );
};

export default PaginationTest;
