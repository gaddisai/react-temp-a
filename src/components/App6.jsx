import {useState} from 'react';
import './App6.css';
function App6(){
        const [item,setItem]=useState([]);
        const [product,setProduct]=useState();
        const [msg,setMsg]=useState();
        const buttonSubmit=()=>{
            setMsg(`item: ${item.ProductName} Price: ${item.ProductPrice}RS Quantity: ${item.ProductQuantity}`);
        }
    return (
        <>
        <div className="bottom_content6">
            <h2>This is App6</h2>
            <p><input type="text" placeholder="Product Name" onChange={(e)=>setItem({...item,ProductName : e.target.value})}></input></p>
            <p><input type="number" placeholder="Product Price" onChange={(e)=>setItem({...item,ProductPrice : e.target.value})}></input></p>
            <p><input type="number" placeholder="Product Quantity" onChange={(e)=>setItem({...item,ProductQuantity : e.target.value})}></input></p>
            <button onClick={buttonSubmit}>Submit</button>
            <hr/>
            <p>{msg}</p>
        </div>
        </>
    )
}
export {App6}

// import { useState } from 'react';
// import './App6.css';

// function App6() {
//     const [items, setItems] = useState([]); // Store products as an array
//     const [product, setProduct] = useState({ ProductName: '', ProductPrice: '', ProductQuantity: '' });
//     const [msg, setMsg] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value }); // Update product object
//     };

//     const buttonSubmit = () => {
//         setItems([...items, product]); // Add the product to the items array
//         setMsg(`Added: ${product.ProductName}, Price: ${product.ProductPrice}RS, Quantity: ${product.ProductQuantity}`);
//         setProduct({ ProductName: '', ProductPrice: '', ProductQuantity: '' }); // Reset input fields
//     };

//     return (
//         <>
//             <div className="bottom_content6">
//                 <h2>This is App6</h2>
//                 <p>
//                     <input
//                         type="text"
//                         name="ProductName"
//                         placeholder="Product Name"
//                         value={product.ProductName}
//                         onChange={handleInputChange}
//                     />
//                 </p>
//                 <p>
//                     <input
//                         type="number"
//                         name="ProductPrice"
//                         placeholder="Product Price"
//                         value={product.ProductPrice}
//                         onChange={handleInputChange}
//                     />
//                 </p>
//                 <p>
//                     <input
//                         type="number"
//                         name="ProductQuantity"
//                         placeholder="Product Quantity"
//                         value={product.ProductQuantity}
//                         onChange={handleInputChange}
//                     />
//                 </p>
//                 <button onClick={buttonSubmit}>Submit</button>
//                 <hr />
//                 <p>{msg}</p>
//                 <h3>Product List:</h3>
//                 <ul>
//                     {items.map((item, index) => (
//                         <li key={index}>
//                             {item.ProductName} - {item.ProductPrice}RS - {item.ProductQuantity}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// }

// export { App6 };