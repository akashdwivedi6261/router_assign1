import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
    const [data, setData] = React.useState([])
    const [formData, setFormData] = React.useState({})
    // const navigate = useNavigate()
    const nav = useNavigate()
    // const [price, setPrice] = React.useState("")
    const handleChange1 = (e) => { 
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })

     }
    const handleChange = (prod) => {
        nav(`/products/${prod.id}`)
    }
    const handlePost = () => {
        const payload = {
            name: formData.name,
            cost: formData.price
        }

        fetch('http://localhost:8000/product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then((response) =>  {
                setFormData({...formData, name: "", price: ""})
                setData([...data, response])
            });
    }

    useEffect(() => {
        fetch("http://localhost:8000/product").then((res) => res.json()).then((res) => {
            console.log("data", data);
            setData(res)
        })
    }, [])

    return (
        <>

            <h1>AllProducts Page</h1>
            <input placeholder='NAME' value={formData.name} onChange={handleChange1} name="name" />
            <input placeholder='PRICE' value={formData.price} onChange={handleChange1} name="price" />
            <button onClick={handlePost}>Submit</button>
            <table style={{width: "50%", margin :"1rem auto",  border:"1px solid grey"}} >
                <tbody>
                {
                data.map((prod) => {
                    return (
                        <tr key={prod.id} style={{ width: "40%", margin: "auto", border: "1px solid orange" }} >
                            <td>{prod.name}</td>
                            <td>{prod.cost}</td>
                            <button style={{ display: "block" }} onClick={() => handleChange(prod)}>more details</button>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
           
        </>
    )
}

export default AllProducts