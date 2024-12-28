import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const PagomationThree = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setItems(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products Table</h2>
      <label>Search product </label>
      <input type="text"/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PagomationThree;
