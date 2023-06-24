import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button, Modal, Form } from 'react-bootstrap';
import '../pages/user/index.css'
import axios from 'axios';

const Category = () => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addCategory, setAddCategory] = useState({
    Category_id: "",
    Category_Name: "",
    gst: ""
  })


  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/categorylist')
    console.log(apidata.data)
    // setToogle(apidata.data.status)
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  console.log("data", data)



  const handleChange = (e) => {
    const { name, value } = e.target
    setAddCategory({ ...addCategory, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("Category_id", addCategory.Category_id);
    formData.append("Category_Name", addCategory.Category_Name);
    formData.append("Category_image", userInfo.file);
    formData.append("gst", addCategory.gst);

    for (const value of formData.values()) {
      console.log(value);
    }
    const api = await axios.post("http://localhost:4000/api/admin/addnewcategory", formData)
    console.log("api", api.data)
    handleClose()
    fetchData()

  }

  const [userInfo, setUserInfo] = useState({
    file: [],
  });
  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  };

  //========= edit category ==================/////
const [categoryid,setCategoryid] = useState("")
  async function editCategory(id,name,gst) {
     await handleShow2()
      setCategoryid(id)
    }

  const handleSubmitEditCategory = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("Category_Name", addCategory.Category_Name);
    formData.append("Category_image", userInfo.file);
    formData.append("gst", addCategory.gst);

    for (const value of formData.values()) {
      console.log(value);
    }
    const api = await axios.patch(`http://localhost:4000/api/admin/updatecategory/${categoryid}`, formData)
    console.log("api", api.data)
    await handleClose2()
    fetchData()

  }


  const filteredData = data.filter((item) =>
  item.Category_Name.toLowerCase().includes(value.toLowerCase())
);

  return (
    <div className="App">
      <div className="heading">Product Category</div>
      <div><div className="search" >
        <Button variant="info" style={{ marginRight: "200px" }} onClick={handleShow} > Add New</Button>
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

              <th>Category Image</th>
              <th>GST No.</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody className="trhover">

            {filteredData.map((value) => {
              let img = `${value.Category_image}`
              return (
                <tr>
                  <td>{value.Category_id} </td>
                  <td>{value.Category_Name} </td>
                  <td> <img src={img} width="155" height="80" /></td>
                  <td>{value.gst} </td>
                  <td>{<IconContext.Provider value={{ size: 30 }}> <FaIcons.FaEdit onClick={()=>{editCategory(value.Category_id,value.Category_Name,value.gst)}} /></IconContext.Provider>} </td>

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
          <Modal.Title>Add New  Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Id</Form.Label>
            <Form.Control type="text" placeholder="category id" name='Category_id' value={addCategory.Category_id} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" placeholder="category name" name='Category_Name' value={addCategory.Category_Name} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Category_image</Form.Label>
            <Form.Control type="file" placeholder="category image" name='Category_image' value={addCategory.Category_image} onChange={handleInputChange} />

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>GST NUMBER</Form.Label>
            <Form.Control type="text" placeholder="GST" name='gst' value={addCategory.gst} onChange={handleChange} />

          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >Add</Button>
        </Modal.Footer>
      </Modal>





      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit  Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Id</Form.Label>
            <Form.Control type="text"  name='Category_id' value={categoryid}  disabled />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" placeholder="category name" name='Category_Name' value={addCategory.Category_Name} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Category_image</Form.Label>
            <Form.Control type="file" placeholder="category image" name='Category_image' value={addCategory.Category_image} onChange={handleInputChange} />

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>GST NUMBER</Form.Label>
            <Form.Control type="text" placeholder="GST" name='gst' value={addCategory.gst} onChange={handleChange} />

          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitEditCategory} >Add</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Category

