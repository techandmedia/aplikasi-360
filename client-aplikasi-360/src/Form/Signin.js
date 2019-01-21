import React from "react";
import { Form, Icon, Input, Col, Row, Button, Card } from "antd";
import { success, error } from "../Basic/InformationModal";

import { loginUser } from "../Fetch/PostData";
import "./signin.css";

const FormItem = Form.Item;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  // componentDidMount() {
  //   console.log(values);
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      const admin_name = values.admin;
      const admin_pass = values.password;
      if (!err) {
        loginUser(this.props.URL, admin_name, admin_pass).then(response => {
          // const user = response.data[0];
          const code = response.data.code;
          if (code === 204) {
            error(
              "Email dan Password salah",
              "Silahkan masukkan email dan password yang benar"
            );
          } else if (code === 205) {
            error(
              "Email Tidak Terdaftar",
              "Silahkan masukkan email yang sudah terdaftar, atau silahkan register untuk membuat akun baru"
            );
          } else if (admin_name) {
            success("Sukses", "Anda berhasil log in");
            this.props.loadUser(admin_name);
            this.props.onRouteChange("admin-dashboard");
          } else {
            alert(
              "Ada sesuatu yang salah dengan diri Anda :). Just Kidding. Mungkin internet Anda sedang error. Coba lagi ya!"
            );
          }
        });
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "65vh", padding: "1em" }}
      >
        <Col>
          <Card>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("admin", {
                  rules: [
                    {
                      message: "The input is not valid E-mail!"
                    },
                    { required: true, message: "Please input your Email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Admin User Name"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedSignInForm = Form.create()(SignIn);

export default WrappedSignInForm;
