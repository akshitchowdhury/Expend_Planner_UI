import React from 'react'

const PagomationThree = () => {

  const[items, setItems] = useState([]);
  const fetchData = async() =>{
    const response = await fetch('https://dummyjson.com/products', {
      method: 'GET',
    });
    const data = await response.json();

    setItems(data.products);
  }

  return (
    <div>
      {
        products.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })  
      }
    </div>
  )
}

export default PagomationThree
