import React from "react";
import Card from "react-bootstrap/Card";
import { Chart } from "react-google-charts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

let data = [
     ["Hospital", "Test"],
     ["Monthly", 28],
     ["Yearly", 35],
     ["Weekly", 20],
   ];
   let data2 = [
     ["Years", "Yearly", "Monthly", "Weekly"],
     ["2017", 660, 400, 200],
     ["2018", 1000, 460, 250],
     ["2019", 1030, 920, 300],
     ["2020", 1110, 1000, 350],
   ];
   
   let options = {
     title: "Todays Orders",
   };

const Dashboard = () => {
  return (
    <>
      <div className="p-5 d-flex " style={{margin:"0px 300px"}}>
        <Card
          className="mx-3"
          style={{
            width: "18rem",
            height: "9rem",
            color: "white",
            background: "linear-gradient(45deg, #4099ff, #73b4ff)",
            boxShadow:'3px 3px 5px grey'
          }}
        >
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text style={{ fontWeight: "700", fontSize: "40px" }}>
              45,000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-3"
          style={{
            width: "18rem",
            color: "white",
            background: "linear-gradient(45deg, #2ed8b6, #59e0c5)",
            boxShadow:'3px 3px 5px grey'
          }}
        >
          <Card.Body>
            <Card.Title>Total Retailers</Card.Title>
            <Card.Text style={{ fontWeight: "700", fontSize: "40px" }}>
              50,000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-3"
          style={{
            width: "18rem",
            color: "white",
            background: "linear-gradient(45deg, #FF5370, #ff869a)",
            boxShadow:'3px 3px 5px grey'
          }}
        >
          <Card.Body>
            <Card.Title>Total Customers</Card.Title>
            <Card.Text style={{ fontWeight: "700", fontSize: "40px" }}>
              60,000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ paddingLeft: "20px", paddingRight: "50px", height: "0px" }}>
      <Container 
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          paddingTop: "17px",
          
        }}
      ><div style={{display:"flex", margin:"0px 250px"}}>
        <Row >
          <Col>
            <Card
              style={{
                marginRight: "70px",
                marginBottom: "10px",
                border: "2px solid silver",
              }}
            >
              <Card.Header>
                Years{" "}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      marginLeft: "435px",
                      marginBottom: "-35px",
                      marginTop: "-65px",
                    }}
                  >
                    Enquiry
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    <Chart
                      chartType="Bar"
                      width="100%"
                      height="234px"
                      data={data2}
                      options={options}
                    />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{margin:"20px 80px "}}>
          <Col>
            <Card style={{ width: "20rem", border: "2px solid silver" }}>
              <Card.Header>Yearly/Monthly Bussiness</Card.Header>
              <Card.Body style={{ margin: "-16px", padding: "16px" }}>
                <Card.Text>
                  <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"250px"}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Dashboard;
