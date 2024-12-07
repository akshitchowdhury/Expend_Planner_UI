import React, { useEffect, useState } from 'react'

const PaginationTwo = () => {
  
    const[shopItems, setShopItems] = useState([]);
    const fetchData = async()=>{
        const response = await fetch("https://dummyjson.com/products", {
            method: "GET",
        });
        const data = await response.json();
        setShopItems(data.products);
    }
    useEffect(() => {
        fetchData();    
    }, []);
  
    return (
    <div>
    <table class="table-fixed">
  <thead>
    <tr>
      <th>Sr No.</th>
      <th>Products</th>
      
    </tr>
  </thead>
  <tbody>
    
      {
        shopItems.map((item,index)=>(
            <>
                <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                </tr>
            </>
        ))
      }
     
    
    
  </tbody>
</table>
      
    </div>
  )
}

export default PaginationTwo
