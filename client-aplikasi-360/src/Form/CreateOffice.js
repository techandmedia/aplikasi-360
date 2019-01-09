import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Card,
  Button,
  Cascader,
  DatePicker
} from "antd";
import { formItemLayout, tailFormItemLayout } from "../Basic/FormLayout";
import { success, info } from "../Basic/InformationModal";

import { postOffices } from "../Fetch/PostData";

const FormItem = Form.Item;

class CreateResponden extends React.Component {
  state = {
    companies: []
  };

  copyDataCompanies = () => {
    this.setState({
      companies: this.props.companies.map(data => ({
        id: data.company_id,
        value: data.company_id,
        label: data.company_name
      }))
    });
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    let length1 = prevProps.companies.length;
    let length2 = this.props.companies.length;
    if (length1 !== length2) {
      this.copyDataCompanies();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      let todayDate = new Date();
      const office_name = fieldsValue.office_name;
      const company_id = fieldsValue.company_id;
      const latitude = fieldsValue.latitude;
      const longitude = fieldsValue.longitude;
      const startDate = fieldsValue.start_date;
      const { overView, handleStayInOverview } = this.props;

      if (err) {
        info(
          "Error",
          "There's something wrong with the connection, please try again latter"
        );
        return null;
      }
      postOffices(
        this.props.URL,
        office_name,
        company_id,
        latitude,
        longitude,
        todayDate,
        startDate
      ).then(res => {
        const code = res.data.code;
        if (code === 200) {
          this.props.handleUpdateChange(code);
          success("Success", "You have succesfully created a office");
          if (overView) {
            handleStayInOverview();
          }
          this.handleReset();
        } else {
          info(
            "Error",
            "There's something wrong with the connection, please try again latter"
          );
        }
      });
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={24}>
          <Card
            title="Create Office"
            headStyle={{
              fontWeight: 500,
              fontSize: 22,
              color: "#696969"
            }}
          >
            <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem
                {...formItemLayout}
                label={"Name"}
                className="label-style"
              >
                {getFieldDecorator("office_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your office name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="name" />)}
              </FormItem>

              <Row gutter={12}>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label={"Location"}
                    className="label-style"
                  >
                    {getFieldDecorator("latitude", {
                      rules: [
                        {
                          required: true,
                          message: "Please input latitude!"
                        }
                      ]
                    })(<Input placeholder="latitude" />)}
                  </FormItem>
                </Col>
                <Col span={12}>
                  {" "}
                  <FormItem {...formItemLayout} label={"."} className="white">
                    {getFieldDecorator("longitude", {
                      rules: [
                        {
                          required: true,
                          message: "Please input longitude!"
                        }
                      ]
                    })(<Input placeholder="longitude" />)}
                  </FormItem>
                </Col>
              </Row>

              <Form.Item {...formItemLayout} label="Office Start Date">
                {getFieldDecorator("start_date", config)(
                  <DatePicker placeholder="date" />
                )}
              </Form.Item>

              <FormItem {...formItemLayout} label="Company">
                {getFieldDecorator("company_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please chose a company"
                    }
                  ]
                })(<Cascader options={this.state.companies} />)}
              </FormItem>
              
              <FormItem {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginBottom: -60 }}
                >
                  Create
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedResponden = Form.create()(CreateResponden);

export default WrappedResponden;
