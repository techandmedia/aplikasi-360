import React from "react";
import { List, Row, Col, Card, Icon } from "antd";

function DisplayCompany(props) {
  const { companies, handleCompanyChange, showModalDeletion } = props;

  return (
    <React.Fragment>
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={16}>
          <List
            grid={{ gutter: 32, column: 2 }}
            dataSource={companies}
            renderItem={item => (
              <List.Item onClick={handleCompanyChange.bind(this,{ item })}>
                <Card
                  title={item.company_name}
                  className="company-style"
                  extra={
                    <Icon type="close" onClick={showModalDeletion} />
                  }
                >
                  <p style={{ fontWeight: "bold" }}>Address:</p>
                  <p style={{ marginTop: -15 }}>{item.address}</p>

                  <p style={{ fontWeight: "bold" }}>Revenue:</p>
                  <p style={{ marginTop: -15 }}>{item.revenue}</p>

                  <p style={{ fontWeight: "bold" }}>Phone No:</p>
                  <p style={{ marginTop: -15 }}>
                    ({item.phone_country_code}) {item.phone_number}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default DisplayCompany;
