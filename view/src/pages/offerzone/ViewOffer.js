import React, { useState } from 'react';
import { Button,Modal,Form } from 'react-bootstrap';
import ReactSwitch from 'react-switch';
import '../retailer/style.css'

const ViewOffer = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
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
     <th>Offer Id </th> 
      <th>Offer Code </th>
      <th>Offer Name</th>
      <th>Valid From</th>
      <th>Valid To</th>
      <th>Discount</th>
      <th>Status</th>
      
    </tr>
    </thead>
    <tbody className="trhover">
    <tr>
    <td>45  </td>
    <td>231</td>
    <td>sandeep </td>
    <td> 25/02/2022 </td>
    <td> 25/02/2022 </td>
    <td>231</td>
    <td> <ReactSwitch /> </td>
  </tr>
  <tr>
  <td>45  </td>
  <td>231</td>
  <td>sandeep </td>
  <td> 25/02/2022 </td>
  <td> 25/02/2022 </td>
  <td>231</td>
  <td> <ReactSwitch /> </td>
  </tr>
  <tr>
  <td>45  </td>
  <td>231</td>
  <td>sandeep </td>
  <td> 25/02/2022 </td>
  <td> 25/02/2022 </td>
  <td>231</td>
  <td> <ReactSwitch /> </td>
  </tr>
  <tr>
  <td>45  </td>
  <td>231</td>
  <td>sandeep </td>
  <td> 25/02/2022 </td>
  <td> 25/02/2022 </td>
  <td>231</td>
  <td> <ReactSwitch /> </td>
  </tr></tbody>
  </table></div>
  
  
  </div>
  )
}

export default ViewOffer

