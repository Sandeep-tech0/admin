import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from "axios";


import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

  MDBRadio
}
  from 'mdb-react-ui-kit';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const AddRetailer = () => {


  const [retailerData, setRetailerData] = useState({
    retailer_id: "",
    shop_name: "",
    password: "",
    owner_name: "",
    registration_No: "",
    registration_doc: "",
    profile_photo: "",
    GST_No: "",
    Pan_No: "",
    Address: "",
    State: "",
    city: "",
    pin_code: "",
    Contact_No: "",
    Email: "",
    Register_on: "",
    status: ""
    })

  const handleChange = (e) => {
    const { name, value } = e.target
    setRetailerData({ ...retailerData, [name]: value })
  }

  const handleSubmit = async () => {
    console.log("user data", retailerData);
    const api = await axios.post("http://localhost:4000/api/admin/addretailer",retailerData)
    console.log("apiretailerpost", api.data)
    
  }

  return (
    <div>

      <MDBContainer fluid>

        <MDBRow className='justify-content-center align-items-center '>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <h3 className="fw-bold mb-0 pb-0 pb-md-0 mb-md-2">Retailer Registration </h3>

              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Retailer Id' size='sm' id='form1' type='text' name='retailer_id' value={retailerData.retailer_id} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Shop Name' size='sm' id='form2' type='text' name='shop_name' value={retailerData.shop_name} onChange={handleChange} />
                </MDBCol>

              </MDBRow>

              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Password' size='sm' id='form3' type='text' name='password' value={retailerData.password} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Owner Name' size='sm' id='form3' type='text' name='owner_name' value={retailerData.owner_name} onChange={handleChange} />
                </MDBCol>

              </MDBRow>

              <MDBRow>

                <MDBCol md='6' >
                  <MDBInput wrapperClass='mb-2' label='Registeration Number' size='sm' id='form4' type='text' name='registration_No' value={retailerData.registration_No} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Registeration Doc.' size='sm' id='form5' type='text' name='registration_doc' value={retailerData.registration_doc} onChange={handleChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='profile_photo' size='sm' id='form1' type='text' name='profile_photo' value={retailerData.profile_photo} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='GST Number' size='sm' id='form2' type='text' name='GST_No' value={retailerData.GST_No} onChange={handleChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Pan Number' size='sm' id='form1' type='text' name='Pan_No' value={retailerData.Pan_No} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Addresss' size='sm' id='form2' type='text' name='Address' value={retailerData.Address} onChange={handleChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='State' size='sm' id='form1' type='text' name='State' value={retailerData.State} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='City' size='sm' id='form2' type='text' name='city' value={retailerData.city} onChange={handleChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Pin Code' size='sm' id='form1' type='text' name='pin_code' value={retailerData.pin_code} onChange={handleChange} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-2' label='Contact Number' size='sm' id='form2' type='tel' name='Contact_No' value={retailerData.Contact_No} onChange={handleChange} />
                </MDBCol>

              </MDBRow>
              <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-2' label='Email' size='sm' id='form1' type='email' name='Email' value={retailerData.Email} onChange={handleChange} />
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-2' label='Status' size='sm' id='form2' type='text' name='status' value={retailerData.status} onChange={handleChange} />
              </MDBCol>

            </MDBRow>
          

           

              <Button className='mb-4' size='lg' onClick={() => handleSubmit()}>Submit</Button>

            </MDBCardBody>
          </MDBCard>

        </MDBRow>
      </MDBContainer>

    </div>


  )
}

export default AddRetailer