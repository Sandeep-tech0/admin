import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import axios from "axios"

const AddOffer = () => {


  const [offerData, setOfferData] = useState({
    offer_code: "",
    offer_name: "",
    valid_from: "",
    valid_to: "",
    discount_upto: "",
    flat_discount: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setOfferData({ ...offerData, [name]: value })
  }
  const handleSubmit = async () => {
    console.log("role data",offerData);
    const api = await axios.post("http://localhost:4000/api/admin/createnewoffer", offerData);
    console.log("api", api.data)

  }


  return (


    <div>
   
    <div className="heading">Add Retailer</div>
<Form style={{width:"500px"}}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Offer Code</Form.Label>
<Form.Control type="text" placeholder="Offer Code" name='offer_code' value={offerData.offer_code} onChange={handleChange}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Offer Name</Form.Label>
<Form.Control type="text" placeholder="Offer Name" name='offer_name' value={offerData.offer_name} onChange={handleChange} />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Valid From</Form.Label>
<Form.Control type="date" placeholder="Valid From" name='valid_from' value={offerData.valid_from} onChange={handleChange}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Valid To</Form.Label>
<Form.Control type="date" placeholder="Valid To" name='valid_to' value={offerData.valid_to} onChange={handleChange}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Discount Upto</Form.Label>
<Form.Control type="text" placeholder="Discount Upto" name='discount_upto' value={offerData.discount_upto} onChange={handleChange}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Flat Discount</Form.Label>
<Form.Control type="text" placeholder="Flat Discount" name='flat_discount' value={offerData.flat_discount} onChange={handleChange}/>
</Form.Group>


<Button variant="info" style={{ marginRight:"200px"}} onClick={handleSubmit}> Save Retailer</Button> 
</Form>
</div>


  )
}

export default AddOffer