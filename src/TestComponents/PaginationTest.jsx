import React, { useEffect, useState } from "react";

const PaginationTest = () => {
  const [products, setProducts] = useState([]);

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
            {products.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } hover:bg-gray-300 transition-colors duration-200`}
              >
                <td className="px-4 py-2 border-t border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {item.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaginationTest;
