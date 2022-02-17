import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [item, setItem] = React.useState({})
    const params = useParams();
    const nav = useNavigate()
    useEffect(()=> {
        fetch(`http://localhost:8000/product/${params.id}`).then((res) => res.json()).then((res) => {
            // console.log("data",data);
            setItem(res)
        })
    }, [params])
    const Goback = () => { 
        nav(`/products`)
     }
  return (
    
    <>
    <h1>ProductDetails</h1>
    <hr />
    <h3>Product name: <span style={{color: "orange"}}>{item.name}</span> </h3>
    <h3>Product price: <span style={{color: "orange"}}>{item.cost}</span></h3>
    <button onClick={Goback}>Go to products</button>
    </>
  )
}

export default ProductDetails