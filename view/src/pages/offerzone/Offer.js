import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddOffer from './AddOffer';
import ViewOffer from './ViewOffer';



const Offer = () => {
    const [key, setKey] = useState('home');
  return (
    <div style={{marginLeft:"300px",marginTop:"20px"}}>
    <Tabs    style={{borderWidth: "5px"}} 
      
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
  >
    <Tab eventKey="home" title="View">
      <ViewOffer />
    </Tab>
    <Tab eventKey="profile" title="Add">
      <AddOffer />
    </Tab>
    
  </Tabs>
    </div>
  )
}

export default  Offer