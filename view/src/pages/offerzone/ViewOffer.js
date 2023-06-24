import React, { useState , useEffect} from 'react';
import { Button,Modal,Form } from 'react-bootstrap';
import ReactSwitch from 'react-switch';
import '../retailer/style.css';
import axios from 'axios';

const ViewOffer = () => {
  const [value, setValue] = React.useState("");
 
  const [data,setdata] = useState([])
  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/offerdata')
    console.log(apidata.data)
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)




  
  return (
    <div className="App" style={{margin:"0px"}}>
    <div className="heading">Offer</div>
    <div><div className="search" >
    <input
      placeholder="Search Offer"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </div>
  <table>
  <thead>
    <tr>
      <th>Offer Code </th>
      <th>Offer Name</th>
      <th>Valid From</th>
      <th>Valid To</th>
      <th>Discount Upto</th>
      <th>Flat Discount</th>
      <th>Status</th>
      
    </tr>
    </thead>
    <tbody className="trhover">
{data && data.map((item)=>{
  return(
  <tr>
    <td>{item.offer_code} </td> 
    <td>{item.offer_name}</td>
    <td>{item.valid_from} </td>
    <td> {item.valid_to} </td>
    <td> {item.discount_upto}</td>
    <td>{item.flat_discount}</td>
    <td> <ReactSwitch /> </td>
  </tr>
  )
})}

  
  </tbody>
  </table></div>
  
  
  </div>
  )
}

export default ViewOffer

