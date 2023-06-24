
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as  BsIcons from "react-icons/bs"
import { Button, Modal, Form, CloseButton } from 'react-bootstrap';
import './index.css'
import Switch from "@mui/material/Switch";
import { useParams } from 'react-router-dom';
import moment from "moment";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";


const User = () => {
  const [addUser, setAddUser] = useState({
    id: "",
    name: "",
    password: ""
  })


  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);
  const [roledata, setroledata] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const [checked, setChecked] = useState();

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const countPerPage = 4;

  const [collection, setCollection] = React.useState(
    cloneDeep(data.slice(0, countPerPage))
  );

  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/userlist')
    console.log(apidata.data)
    return setdata(apidata.data)

  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)


  const fetchRole = async () => {
    const apiroledata = await axios.get('http://localhost:4000/api/admin/viewrole')
    console.log(apiroledata.data)
    return setroledata(apiroledata.data)

  }
  useEffect(() => { fetchRole() }, [])
  console.log("data", data)


  const handleChange = (e) => {
    const { name, value } = e.target
    setAddUser({ ...addUser, [name]: value })

  }
  const handleSubmit = async () => {
    console.log("user data", addUser);
    const api = await axios.post("http://localhost:4000/api/admin/registeruser", addUser)
    console.log("api", api.data)
    fetchData()
    const a = handleClose()
  }


  const handleChangeStatus = async (id, e) => {
    e.preventDefault();
    console.log(id);
    let response = await axios.patch(
      `http://localhost:4000/api/admin/userstatusupdate?status=active&id=${id}`
    );
    fetchData()
    console.log(response);
  };


  const handleChangeStatus2 = async (id, e) => {
    e.preventDefault();
    await setChecked("Deactive");
    console.log("this is id", id);

    let response = await axios.patch(
      `http://localhost:4000/api/admin/userstatusupdate?status=Deactive&id=${id}`
    );
    fetchData()
    console.log(response);
  };
  ////================ Assign Role =================================//

  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [roleid, setRoleid] = useState("");
  const [rolename, setRolename] = useState("")

  async function assignRolee(id, name) {
    setUserid(id)
    setUsername(name)
    handleShow2()

  }


  const handleSubmitRoleassign = async (e) => {
    e.preventDefault()
    const data = { id: userid, role_id: roleid }
    console.log("daata", data);
    const api = await axios.post("http://localhost:4000/api/admin/assignrole", data)
    console.log("api", api.data)
    handleClose2()

  }
  //=======  view role ============================================================================================
  const [staticModal, setStaticModal] = useState(false);
  const [roleview, setroleview] = useState([]);


  const toggleShow = () => setStaticModal(!staticModal);


  const viewRole = async (id) => {
    setUserid(id)

    toggleShow()
    const apiroledata = await axios.get(`http://localhost:4000/api/admin/viewassignrole?id=${id}`)
    console.log(apiroledata.data)
    return setroleview(apiroledata.data)
  }


  //============= edit user ==========
  const [name, setEditName] = useState('');
  const [password, setEditPassword] = useState('');
  const editUser = (id) => {
    setUserid(id)
    handleShow3()
  }


  const handleSubmitEditUser = async () => {

    const data = { name, password }
    console.log("user data", data);
    const api = await axios.patch(`http://localhost:4000/api/admin/usermodify?id=${userid}`, data)
    console.log("api", api.data)
    handleClose3()
    fetchData()
  }

  //============= delete assign role ====================

  const handleAssignroleDelete = async (roleid) => {
    console.log("roleid", roleid)
    const api = await axios.delete(`http://localhost:4000/api/admin/revokerole?id=${userid}&role_id=${roleid}`)
    const a = await viewRole()


  }

  const viewProfile = () => {

    alert("view profile")
  }


  //=====================Search fuction =================
  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(value.toLowerCase())
  // );

  const filteredData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        data
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      filteredData.current(value);
    }
  }, [value]);
//================== Pagination =========================
const [currentPage, setCurrentPage] = React.useState(1);
const updatePage = p => {
  setCurrentPage(p);
  const to = countPerPage * p;
  const from = to - countPerPage;
  setCollection(cloneDeep(data.slice(from, to)));
};
  return (
    <div className="App">
      <div className="heading">User List</div>
      <div><div className="search" >
        <Button variant="info" style={{ marginRight: "200px" }} onClick={handleShow} > Add User</Button>
        <input
          type="text"
          placeholder="Search User"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
        <table>
          <thead>


            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="trhover">


            {collection.map((value) => {
              console.log("value.status", value.status, "vlaue.id", value.id)
              return (
                <tr>
                  <td>{value.id} </td>
                  <td>{value.name}</td>
                  <td> {moment(value.createdon).format('D MMMM YYYY , h:mm a')}</td>
                  <td>

                    {value.status == "Deactive" ? (
                      <Switch

                        onChange={(e) => handleChangeStatus(value.id, e)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    ) : (
                      <Switch

                        defaultChecked
                        onChange={(e) => handleChangeStatus2(value.id, e)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    )},

                  </td>
                  <td>  <Button variant="info" size="sm" onClick={() => assignRolee(value.id, value.name)}>
                    Assign Role
                  </Button>
                    <Button variant="info" size="sm" style={{ marginLeft: "20px" }} onClick={() => viewRole(value.id)} >
                      View
                    </Button>

                  </td>
                  <td>{<IconContext.Provider value={{ size: 30 }}>< FaIcons.FaEdit onClick={() => { editUser(value.id) }} />  &nbsp;&nbsp;&nbsp;&nbsp; <BsIcons.BsEyeFill />  </IconContext.Provider >}  </td>

                </tr>
              )
            })}
          </tbody>

        </table>
        <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={data.length}
      />
      </div>






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
            <Form.Control type="text" placeholder="user id" name='id' value={addUser.id} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="user name" name='name' value={addUser.name} onChange={handleChange} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={addUser.password} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleSubmit()}} >Add</Button>
        </Modal.Footer>
      </Modal>





      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control type="text" placeholder="bdj" value={userid} onChange={(e) => setUserid(e.target.value)} disabled />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="sfs" value={username} disabled />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Assign Role</Form.Label>

            <Form.Control as="select" value={roleid} onChange={(e) => setRoleid(e.target.value)} >

              <option>Choose Role</option>
              {roledata.map((a) => {
                console.log(a.role_name)

                return (
                  <option > {a.role_id} &nbsp;  {a.role_name} </option>


                )
              })}

            </Form.Control></Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitRoleassign} >Save</Button>
        </Modal.Footer>
      </Modal>




      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Roles</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <table>
                <thead>
                  <tr>
                    <th>Role Name</th>
                    <th> Role Id</th>
                    <th> Assigned On</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>

                  {roleview.map((value) => {
                    return (
                      <tr>
                        <td>{value.role_name}</td>
                        <td>{value.role_id}</td>
                        <td> {moment(value.assigned_on).format('D MMMM YYYY , h:mm a')}</td>

                        <td><CloseButton onClick={() => { handleAssignroleDelete(value.role_id) }} /></td>


                      </tr>

                    )

                  })}

                </tbody>
              </table>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New  User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control type="text" name='id' value={userid} disabled />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="user name" value={name} onChange={(e) => setEditName(e.target.value)} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setEditPassword(e.target.value)} />

          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitEditUser(userid)} >Save</Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default User;












