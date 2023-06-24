import React,{useState} from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import {
  
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';

function UserChangePassword() {

const [changePassword, setChangePassword] = useState({
oldPassword:"",
newPassword:"",
confirmPassword:""

})


const handleChange = (e) => {
  const { name, value } = e.target
  setChangePassword({ ...changePassword, [name]: value })

}
const handleSubmit = async () => {

  const api = await axios.post(`http://localhost:4000/api/admin/userpasswordchange/`, changePassword)
  console.log("api", api.data)
 
}


  return (
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px',color:"white"}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <h2 className="fw-bold my-2 ">Change Password</h2>


              <MDBInput name='oldPassword'  value={changePassword.oldPassword} onChange={handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Old Password' id='formControlLg' type='password' size="lg" />
              <MDBInput name='newPassword'  value={changePassword.newPassword} onChange={handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='New Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput  name='confirmPassword'  value={changePassword.confirmPassword} onChange={handleChange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='formControlLg' type='password' size="lg"/>



              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <Button outline className='mx-2 px-5' color='white' style={{color:"white"}} size='lg' onClick={()=>{handleSubmit()}} >
                Save
              </Button>

              

             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default UserChangePassword;












