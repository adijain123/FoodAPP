import React, {useState} from 'react'
import {useDispatchCart, useCart} from './ContextReducer'

export default function Card(props) {

     
      let data = useCart()
      let options = props.options
      let priceOptions = Object.keys(options)
      const [qty,setQty] = useState(1)
      const [size, setSize] = useState("")
      const handleAddToCart = async() => {
       

      }

  return (
    <div>
        {/* body */}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "500px" }}
        >
          <img src={props.foodItem.img} className="card-img-top" style={{height:"180px", objectFit:"fill"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">This is important text</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-primary rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <select className="m-2 h-100 bg-primary rounded" onChange={(e)=>setSize(e.target.value)}>
                   {priceOptions.map((data)=>{
                      return <option key = {data} value = {data}>{data}</option>
                  })}
              </select>
            </div>
            <hr/>
            <button className='btn btn-primary justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
