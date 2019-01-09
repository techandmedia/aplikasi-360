import React from "react";
import { List, Row, Col, Card, Icon } from "antd";

class DisplayCompany extends React.Component {
  state = {
    dataOffices: []
  };

  componentDidMount() {
    this.getOfficeData();
  }

  getOfficeData = () => {
    const { companyID, offices } = this.props;
    let data = [];
    offices.map(office => {
      if (companyID === office.company_id) {
        let date = new Date(office.start_date);
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
      }
      return null;
    });
    this.setState({ dataOffices: data });
  };

  render() {
    const { dataOffices } = this.state;
    const { showModalDeletion, handleOfficeDelete } = this.props;
    const length = dataOffices.length === 0 ? true : false;

    if (length === false) {
      return (
        <Row
          type="flex"
          justify="center"
          style={{ marginTop: "1em", padding: "1em" }}
        >
          <Col md={16}>
            <List
              grid={{ gutter: 32, column: 2 }}
              dataSource={dataOffices}
              renderItem={item => (
                <List.Item
                  // key={item.officeID}
                  onClick={handleOfficeDelete.bind(this,{ item })}
                >
                  <Card
                    title={item.officeName}
                    extra={
                      <Icon type="close" onClick={showModalDeletion} />
                    }
                    className="company-style"
                  >
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
    } else {
      return (
        <Col md={{ span: 24, offset: 0 }}>
          <p
            style={{
              marginTop: 10,
              marginBottom: 200,
              fontSize: 20,
              fontWeight: 500,
              color: "violet",
              textAlign: "center"
            }}
          >
            There's no offices created yet
          </p>
        </Col>
      );
    }
  }
}

export default DisplayCompany;
