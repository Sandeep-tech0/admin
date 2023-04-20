
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button,Modal,Form } from 'react-bootstrap';
import './index.css'
import ReactSwitch from 'react-switch';
const User = () => {
  const [addUser, setAddUser] = useState({



  })

  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/userlist')
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)


  
  return (
    <div className="App">
    <div className="heading">User List</div>
    <div><div className="search" >
    <Button variant="info" style={{ marginRight:"200px"}}   onClick={handleShow} > Add User</Button> 
    <input
      placeholder="Search User"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </div>
  <table>
  <thead>

  
    <tr>
     <th>Id</th> 
      <th>Name</th>
      <th>Status</th>
      <th>Action</th>
      <th>Role</th>
    </tr>
    </thead>
    <tbody className="trhover">

    
  {data.map((value) => {
    return (
    <tr>
    <td>{value.id} </td>
    <td>{value.name}</td>
    <td> <ReactSwitch /> </td>
    <td>{<IconContext.Provider value={{  size: 30 }}>< FaIcons.FaEdit onClick={handleShow2} /></IconContext.Provider>} </td>
    <td>{value.role_name} </td>
  </tr>
    )})}
 </tbody>
   
  </table></div>
  <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Add New  User</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>User Id</Form.Label>
  <Form.Control type="text" placeholder="user id" />
 
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>User Name</Form.Label>
<Form.Control type="text" placeholder="user id" />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary">Add</Button>
  </Modal.Footer>
</Modal>



<Modal
show={show2}
onHide={handleClose2}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit User</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>User Id</Form.Label>
<Form.Control type="text" placeholder="user id" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>User Name</Form.Label>
<Form.Control type="text" placeholder="user id" />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose2}>
    Close
  </Button>
  <Button variant="primary">Add</Button>
</Modal.Footer>
</Modal>





  </div>
  )
}

export default User














// import React, { useState } from 'react'

// import DataTable from 'react-data-table-component';

// const User = () => {
//  const columns = [
//   {
//     name: "Id",
//     selector: row => row.id,
//     sortable:true,
    
    
//   },
//   {
//     name: "Name",
//     selector: row => row.name,
//     sortable:true
//   },
//   {
//     name: "Status",
//     selector: row => row.status
//   }, {
//     name: "Action",
//     selector: row => row.action
//   }, {
//     name: "Role",
//     selector: row => row.role
//   },
//  ]

//  const data =[

//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 45,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 12,
//     name:"ankit",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   }, 
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 45,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 12,
//     name:"ankit",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   }, 
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 45,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 12,
//     name:"ankit",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   },
//   {
//     id: 1,
//     name:"sandeep",
//     status: "active",
//     action:"edit",
//     role:"hr"

//   }, 
//  ]
//  const [records,setRecords] = useState(data);
//  function handleFilter(event) {
//   const newData = data.filter(row =>{
//     return row.name.toLowerCase().includes(event.target.value.toLowerCase())
//   })
//   setRecords(newData)
//  }
//   return (
//     <div className='container mt-5 ' style={{margin:"100px" ,color:"dark"}}>
//     <div className='text-end'><input type="text" onChange={handleFilter}/></div>
//     <div >
//         <DataTable 
      
//         columns ={columns }
        
//     data={records}
//     selectableRows
//     theme='dark'
//     highlightOnHover
//     title="Users"
//     expandOnRowClicked
//     fixedHeader
//     pagination
//     TableHead='bold'
    
   
//     ></DataTable>
//     </div>

    
    
//     </div>
//   )
// }

// export default User