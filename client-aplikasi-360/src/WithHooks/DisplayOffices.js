import React, { useState, useEffect } from "react";
import { List, Row, Col, Card } from "antd";
// import { success, error, info, warning } from "../Basic/InformationModal";

function DisplayCompany({ offices, companyID }) {
  const [dataOffices, setDataOffices] = useState([]);

  let data = useEffect(() => {
    console.log(offices)
    let data = [];
    offices.map(office => {
      let date = new Date(office.start_date);
      if (companyID === office.company_id) {
        console.log("sama", date);
        data.push({
          officeID: office.office_id,
          officeName: office.office_name,
          lat: office.latitude,
          log: office.log,
          date:
            date.getMonth() +
            1 +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear()
        });
      } else {
        // console.log("tidak sama");
      }
    });
    console.log(data);
  });

  setDataOffices(data)
  // console.log(dataOffices)

  return (
    <Row
      type="flex"
      justify="center"
      style={{ marginTop: "1em", padding: "1em" }}
    >
      <Col md={16}>
        <List
          grid={{ gutter: 32, column: 2 }}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.officeID}>
              <Card title={item.officeName} className="company-style">
                <p style={{ fontWeight: "bold" }}>Location:</p>
                <p style={{ marginTop: -15 }}>Lat: {item.lat}</p>
                <p style={{ marginTop: -15 }}>Log: {item.log}</p>

                <p style={{ fontWeight: "bold" }}>Office Start Date:</p>
                <p style={{ marginTop: -15 }}>{item.date}</p>
              </Card>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default DisplayCompany;
