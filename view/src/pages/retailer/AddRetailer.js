import React from 'react'
import { Button,Form } from 'react-bootstrap';

const AddRetailer = () => {
  return (
    <div>
   
    <div className="heading">Add Retailer</div>
<Form style={{width:"500px"}}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Shope Id</Form.Label>
<Form.Control type="text" placeholder="Shope id" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Shope Name</Form.Label>
<Form.Control type="text" placeholder="shope name" />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Mobile No.</Form.Label>
<Form.Control type="text" placeholder="mobile no." />
</Form.Group>
<Button variant="info" style={{ marginRight:"200px"}}  > Save Retailer</Button> 
</Form>
</div>


  )
}

export default AddRetailer