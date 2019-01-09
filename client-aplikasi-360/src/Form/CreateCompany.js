import React from "react";
import { Form, Input, Select, Row, Col, Card, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "../Basic/FormLayout";
import { success, info } from "../Basic/InformationModal";

import { postCompanies } from "../Fetch/PostData";

const FormItem = Form.Item;
const Option = Select.Option;

class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(e)
    this.props.form.validateFieldsAndScroll((err, values) => {
      // console.log(values);
      const company_name = values.company_name;
      const address = values.address;
      const revenue = values.revenue;
      const phone_country_code = values.prefix;
      const phone_number = values.phone;

      const {
        overView,
        handleStayInOverview,
        handleUpdateChange
      } = this.props;

      if (!err) {
        postCompanies(
          this.props.URL,
          company_name,
          address,
          revenue,
          phone_country_code,
          phone_number
        ).then(res => {
          const code = res.data.code;
          if (code === 200) {
            handleUpdateChange(code);
            success("Success", "You have succesfully created a company");
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
      }
      // console.log(err);
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
    // console.log(this.props)

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "62"
    })(
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
        <Option value="61">+61</Option>
      </Select>
    );

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={24}>
          <Card
            title="Create Company"
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
                {getFieldDecorator("company_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your full name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="name" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label={"Address"}
                className="label-style"
              >
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your address!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="address" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Revenue"
                className="label-style"
              >
                {getFieldDecorator("revenue", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your revenue!"
                    }
                  ]
                })(<Input placeholder="revenue" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Phone Number"
                className="label-style"
              >
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder="number"
                  />
                )}
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

const WrappedCreateCompany = Form.create()(CreateCompany);

export default WrappedCreateCompany;
