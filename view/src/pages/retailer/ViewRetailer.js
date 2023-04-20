import React, { useState } from 'react';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button,Modal,Form } from 'react-bootstrap';
import './style.css'

const ViewRetailer = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
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
     <th>Shop Id </th> 
      <th>Shope Name </th>
      <th>Mobile No.</th>
      <th>Action</th>
      
    </tr>
    </thead>
    <tbody className="trhover">
    <tr>
    <td>45  </td>
    <td>sandeep </td>
    <td> 25/02/2022 </td>
    <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow} /></IconContext.Provider>} </td>
    
  </tr>
  <tr>
    <td>45  </td>
    <td>sandeep </td>
    <td> 25/02/2022 </td>
    <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow} /></IconContext.Provider>} </td>
    
  </tr>
  <tr>
    <td>45  </td>
    <td>sandeep </td>
    <td> 25/02/2022 </td>
    <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow} /></IconContext.Provider>} </td>
    
  </tr>
  <tr>
    <td>45  </td>
    <td>sandeep </td>
    <td> 25/02/2022 </td>
    <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow} /></IconContext.Provider>} </td>
    
  </tr></tbody>
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

