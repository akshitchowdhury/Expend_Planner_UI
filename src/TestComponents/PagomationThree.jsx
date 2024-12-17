import React, { useEffect, useState } from 'react'

const PagomationThree = () => {

  const[items, setItems] = useState([]);
  const fetchData = async() =>{
    const response = await fetch('https://dummyjson.com/products', {
      method: 'GET',
    });
    const data = await response.json();

    setItems(data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {
        items.map((item) => {
          return 
          <>
          <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          </div>;
          </>
          
        })  
      }
    </div>
  )
}

export default PagomationThree
