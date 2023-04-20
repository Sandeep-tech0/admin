
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Button, Modal, Form } from 'react-bootstrap';
import '../pages/user/index.css'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

const Roles = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:5000/role/roledata')
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)




  const [roleData, setRoleData] = useState({
    role_id: "",
    role_name: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setRoleData({ ...roleData, [name]: value })
  }
  const handleSubmit = async () => {
    console.log("role data", roleData);
    const api = await axios.post("http://localhost:5000/role/addrole", roleData)
    console.log("api", api.data)
    
     fetchData()

  }
//////////////delete//////////////////////////////

  
  const deleteRole = async (id) => {
    console.log("roleId", `http://localhost:5000/role/roledelete/${id}`);
    const result = await axios.delete(`http://localhost:5000/role/deleterole/${id}`)
    if (result === result) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {


          
          Swal.fire(
            'Deleted!',
            'the user has been deleted.',
            'success'

          )
        }
        
      }).then(() => fetchData())

    } else {
      alert("user not deleted")
    }}

///////////////update///////////////////////
const { role_id } = useParams()
const handleUpdate = async (role_id) => {
  
  console.log("user data", roleData);
  const api = await axios.patch(`http://localhost:5000/role/roleupdate/${role_id}`, roleData)
  console.log("api", api.data)
  
}

  
  
  



  return (
    <div className="App">
      <div className="heading">Roles</div>
      <div><div className="search" >
        <Button variant="info" style={{ marginRight: "200px" }} onClick={handleShow} > Add Role</Button>
        <input
          placeholder="Search Role"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
        <table>
          <thead>
            <tr>
              <th> Role Id</th>
              <th>Role Name</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody className="trhover">
          
            {data.map((value) => {
              return (


                <tr>
                  <td>{value.role_id} </td>
                  <td>{value.role_name} </td>

                  <td>{<IconContext.Provider value={{ size: 30 }}>< FaIcons.FaEdit onClick={()=>handleShow(value.role_id)} /> <AiIcons.AiFillDelete onClick={() => deleteRole(value.role_id)} /></IconContext.Provider>} </td>

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
          <Modal.Title>Add New  Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Role Id</Form.Label>
            <Form.Control type="text" placeholder="role id" name="role_id" value={roleData.role_id} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Role Name</Form.Label>
            <Form.Control type="text" placeholder="role name" name="role_name" value={roleData.role_name} onChange={handleChange} />

          </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit() } >Add</Button>
        </Modal.Footer>
      </Modal>




    </div>



  )
}

export default Roles;
