import React, { useEffect } from 'react'

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
      {
        shopItems.map((item,index)=>(
            <>
                <p>{item.title}</p>
            </>
        ))
      }
    </div>
  )
}

export default PaginationTwo
