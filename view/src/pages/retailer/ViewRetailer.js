import React, { useState,useEffect } from 'react';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button,Modal,Form } from 'react-bootstrap';
import './style.css';
import axios from "axios";

const ViewRetailer = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [data,setdata] = useState([])
  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/viewretailer')
    console.log(apidata.data)
    // setToogle(apidata.data.status)
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)


  
  return (
    <div className="App" style={{margin:"0px"}}>
    <div className="heading">Retailer</div>
    <div><div className="search" >
    <input
      placeholder="Search Retailer"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </div>
  <table>
  <thead>
    <tr>
     <th>Retailer Id </th> 
      <th>Shope Name </th>
      <th>Owner Name </th>
      <th>Registeration Number </th>
      <th>Registeration  Doc.</th>
      <th>Profile Photo</th>
      <th>State</th>
      <th>City</th>
      <th>Address</th>
      <th>Contact No.</th>
      <th>Email</th>
      <th>Status</th>
      <th>Action</th>
      
    </tr>
    </thead>
    <tbody className="trhover">
    {data && data.map((item)=>{
      return(
        <tr>
        <td>{item.retailer_id}</td>
        <td>{item.shop_name} </td>
        <td> {item.owner_name} </td>
        <td> {item.registration_No} </td>
        <td> {item.registration_doc} </td>
        <td>{item.profile_photo} </td>
        <td> {item.State}</td>
        <td> {item.city} </td>
        <td>{item.Address} </td>
        <td> {item.Contact_No}</td>
        <td> {item.Email} </td>
        <td> {item.status} </td>
        
        
        <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow} /></IconContext.Provider>} </td>
        
      </tr>
      )
    })}
   
 
  </tbody>
  </table></div>
  <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Add New  Subategory</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Main Category</Form.Label>
  <Form.Select>
  <option>electronic</option>
  <option>car</option>
  <option>bike</option>
  <option>cloth</option>
</Form.Select>
 
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Subcategory Name</Form.Label>
<Form.Control type="text" placeholder="subcategory name" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Subcategory Id</Form.Label>
<Form.Control type="text" placeholder="subcategory id" />

</Form.Group>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary">Add</Button>
  </Modal.Footer>
</Modal>
 
  
  </div>
  )
}

export default ViewRetailer

