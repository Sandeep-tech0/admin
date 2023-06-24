import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { Button, Modal, Form } from 'react-bootstrap';
import '../pages/user/index.css'
import axios from "axios"

const SubCategory = () => {
  const [viewid, setviewid] = useState([])
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:4000/api/admin/viewsubcategory')
    console.log("--------------------", apidata.data)
    // setToogle(apidata.data.status)
    return setdata(apidata.data)
  }
  useEffect(() => { fetchData() }, [])
  // console.log("data", data)

  
  //======= addsubcategory ======================
  const [addsubCategory, setAddsubCategory] = useState({

    Category_id: "",
    sub_category_id: "",
    subcategory_name: "",
    subcategory_image:"",
  });


  const handleChange = (e) => {
    const { name, value } = e.target
    console.log({ name })
    setAddsubCategory({ ...addsubCategory, [name]: value })
    console.log({ addsubCategory })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData();

    formData.append("Category_id", addsubCategory.Category_id);
    formData.append("sub_category_id", addsubCategory.sub_category_id);
    formData.append("subcategory_name", addsubCategory.subcategory_name);
    formData.append("subcategory_image", userInfo.file);


    for (const value of formData.values()) {
      console.log("777777777777777777777", value);
    }
    const api = await axios.post("http://localhost:4000/api/admin/addsubcategory", formData)
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

  //==================== view category================
  const [category, setCategory] = useState([]);

  const viewCategory = async () => {
    const apicategorydata = await axios.get("http://localhost:4000/api/admin/showcategory")
    console.log("apicategorydata ", apicategorydata.data)
    setCategory(apicategorydata.data.response)

  }
  useEffect(() => { viewCategory() }, [])
  // console.log("category      ", category)

///==== Edit Subcategory =========

const [cid, setCid] = useState("")
const [subcid, setSubid] = useState("")

const editsubCategory = (id,subid) => {
  setCid(id)
  setSubid(subid)
 handleShow2()
}

const handleSubmitEditsubCategory = async (e) => {
  e.preventDefault()
  let formData = new FormData();
  formData.append("subcategory_name", addsubCategory.subcategory_name);
  formData.append("subcategory_image", userInfo.file);
  
  for (const value of formData.values()) {
    console.log(value);
  }
  const api = await axios.patch(`http://localhost:4000/api/admin/updatesubcategory?category_id=${cid}&sub_category_id=${subcid}`, formData)
  console.log("api", api.data)
  await handleClose2()
  fetchData()

}


const filteredData = data.filter((item) =>
item.subcategory_name.toLowerCase().includes(value.toLowerCase())
);


  return (
    <div className="App">
      <div className="heading">Product Subcategory</div>
      <div><div className="search" >
        <Button variant="info" style={{ marginRight: "200px" }} onClick={handleShow} > Add New</Button>
        <input
          placeholder="Search Subcategory"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
        <table>
          <thead>
            <tr>
              <th>Main Category</th>
              <th> Sub Category Id </th>
              <th> Sub Category Name</th>
              <th> Sub Category Image</th>

              <th>Action</th>

            </tr>
          </thead>
          <tbody className="trhover">

            {filteredData && filteredData.map((value) => {
              let img = `${value.subcategory_image}`
              return (
                <tr>
                  <td>{value.Category_Name} </td>
                  <td>{value.sub_category_id} </td>
                  <td>{value.subcategory_name} </td>
                  <td> <img src={value.subcategory_image} width="155" height="80" /></td>

                  <td>{<IconContext.Provider value={{ size: 30 }}> <FaIcons.FaEdit onClick={() => { editsubCategory(value.Category_id,value.sub_category_id) }} /></IconContext.Provider>} </td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New  SubCategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category Name</Form.Label>
            <div class="row mt-2">
              <div class="col">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="Category_id" value={addsubCategory.Category_id} onChange={handleChange}>
                  <option selected > select Category</option>
                  {category && category.map((value, index,) => {
                    return (
                      <>
                        <option value={value.Category_id} key={index}>{value.Category_Name}</option>
                      </>)
                  })}

                </select>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subcategory Name</Form.Label>
            <Form.Control type="text" placeholder="subcategory name" name='subcategory_name' value={addsubCategory.subcategory_name} onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subcategory Id</Form.Label>
            <Form.Control type="text" placeholder="subcategory id" name='sub_category_id' value={addsubCategory.sub_category_id} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Subcategory_image</Form.Label>
            <Form.Control type="file" placeholder="sub category image" name='subcategory_image' value={addsubCategory.subcategory_image} onChange={handleInputChange} />

          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>



      <Modal
      show={show2}
      onHide={handleClose2}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit  SubCategory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category Id</Form.Label>
          <Form.Control type="text" placeholder="category id" name='sub_category_id' value={cid}  />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subcategory Id</Form.Label>
          <Form.Control type="text" placeholder="subcategory id" name='sub_category_id' value={subcid} />
        </Form.Group>


        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subcategory Name</Form.Label>
          <Form.Control type="text" placeholder="subcategory name" name='subcategory_name' value={addsubCategory.subcategory_name} onChange={handleChange} />

        </Form.Group>
       <Form.Group className="mb-3" >
          <Form.Label>Subcategory_image</Form.Label>
          <Form.Control type="file" placeholder="sub category image" name='subcategory_image' value={addsubCategory.subcategory_image} onChange={handleInputChange} />

        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitEditsubCategory}>Add</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default SubCategory

