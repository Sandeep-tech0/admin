import React, { useState } from 'react';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button,Modal,Form } from 'react-bootstrap';
import '../pages/user/index.css'

const Category = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
    <div className="App">
    <div className="heading">Product Category</div>
    <div><div className="search" >
    <Button variant="info" style={{ marginRight:"200px"}}   onClick={handleShow} > Add New</Button> 
    <input
      placeholder="Search Category"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </div>
  <table>
  <thead>
    <tr>
     <th>Category Id</th> 
      <th>Category Name</th>
      <th>Add Date</th>
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
    <Modal.Title>Add New  Category</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Category Id</Form.Label>
  <Form.Control type="text" placeholder="user id" />
 
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Category Name</Form.Label>
<Form.Control type="text" placeholder="user id" />

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

export default Category

