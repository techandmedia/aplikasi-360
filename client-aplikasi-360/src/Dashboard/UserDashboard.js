import React from "react";
import {
  Cascader,
  Button,
  Radio,
  // Rate,
  Form,
  Card,
  // Input,
  Row,
  Col
} from "antd";
import { getSoal, getUsers, getRole } from "../Fetch/GetData";
import { HitungC1 } from "../Calcultaion/calcultate";
import { postPertanyaan } from "../Fetch/PostData";
import { formItemLayout, tailFormItemLayout } from "../Basic/FormLayout";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Dashboard extends React.Component {
  state = { soal: [], users: [], radioValue: 0 };

  componentDidMount() {
    this.getDataSoal();
    this.getDataUsers();
    this.getDataRole();
  }

  onRadioChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      radioValue: e.target.value
    });
  };

  getDataRole = () => {
    getRole(this.props.URL).then(response => {
      this.setState({
        role: response.data.map(data => ({
          id: data.role_id,
          value: data.role_id, // Jangan ambil name nya, tapi ambil id nya untuk menghemat size di database
          label: data.role_name
        }))
      });
    });
    return null;
  };

  getDataSoal = () => {
    const URL = this.props.URL;
    getSoal(URL).then(result => {
      // console.log(result);
      this.setState({
        soal: result.data.map(data => ({
          id: data.soal_id,
          soal: data.soal
        }))
      });
      // console.log(this.state.soal);
    });
    return null;
  };

  getDataUsers = () => {
    const URL = this.props.URL;
    getUsers(URL).then(result => {
      // console.log(result.data);
      this.setState({
        users: result.data.map(data => ({
          id: data.nim_nim,
          value: data.nip_nim,
          label: data.name
        }))
      });
      // console.log(this.state.users);
    });
    return null;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      console.log(fieldsValue);
      const K001 = fieldsValue.K001;
      const K002 = fieldsValue.K002;
      const K003 = fieldsValue.K003;
      const K004 = fieldsValue.K004;
      HitungC1(K001, K002, K003, K004);

      // let todayDate = new Date();
      // const office_name = fieldsValue.office_name;
      // const company_id = fieldsValue.company_id;
      // const latitude = fieldsValue.latitude;
      // const longitude = fieldsValue.longitude;
      // const startDate = fieldsValue.start_date;
      // const { overView, handleStayInOverview } = this.props;

      // if (err) {
      //   info(
      //     "Error",
      //     "There's something wrong with the connection, please try again latter"
      //   );
      //   return null;
      // }
      // postOffices(
      //   this.props.URL,
      //   office_name,
      //   company_id,
      //   latitude,
      //   longitude,
      //   todayDate,
      //   startDate
      // ).then(res => {
      //   const code = res.data.code;
      //   if (code === 200) {
      //     this.props.handleUpdateChange(code);
      //     success("Success", "You have succesfully created a office");
      //     if (overView) {
      //       handleStayInOverview();
      //     }
      //     this.handleReset();
      //   } else {
      //     info(
      //       "Error",
      //       "There's something wrong with the connection, please try again latter"
      //     );
      //   }
      // });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentUser } = this.props;
    return (
      <React.Fragment>
        <h1>
          Ini Dashboard {currentUser.full_name} dengan jabatan{" "}
          {currentUser.role_name}
        </h1>
        <Row
          type="flex"
          justify="center"
          style={{ marginTop: "1em", padding: "1em" }}
        >
          <Col md={24}>
            <Card
              title="Form Input Kuesioner"
              headStyle={{
                fontWeight: 500,
                fontSize: 22,
                color: "#696969"
              }}
            >
              <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem {...formItemLayout} label="Users">
                  {getFieldDecorator("user_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please chose a user"
                      }
                    ]
                  })(<Cascader options={this.state.users} />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Jabatan">
                  {getFieldDecorator("role", {
                    rules: [
                      {
                        required: true,
                        message: "Pilih jabatan Anda"
                      }
                    ]
                  })(<Cascader options={this.state.role} />)}
                </FormItem>

                {/* <FormItem
                  {...formItemLayout}
                  label={"Name"}
                  className="label-style"
                >
                  {getFieldDecorator("full_name", {
                    rules: [
                      {
                        required: true,
                        message: "Harap masukkan nama Anda!",
                        whitespace: false
                      }
                    ]
                  })(<Input placeholder="name" />)}
                </FormItem> */}

                {/* <FormItem {...formItemLayout} label="Jabatan">
                  {getFieldDecorator("role", {
                    rules: [
                      {
                        required: true,
                        message: "Pilih jabatan Anda"
                      }
                    ]
                  })(<Cascader options={this.state.role} />)}
                </FormItem> */}

                {this.state.soal.map(data => {
                  return (
                    <FormItem
                      {...formItemLayout}
                      label={data.soal}
                      key={data.id}
                    >
                      {getFieldDecorator(data.id, {
                        initialValue: 3,
                        rules: [
                          {
                            required: true,
                            message: "Harap Rate"
                          }
                        ]
                      })(
                        <RadioGroup onChange={this.onChange}>
                          {" "}
                          <span style={{ marginRight: 10, color: "red" }}>
                            Sangat Tidak Bagus
                          </span>
                          <Radio value={1}>1</Radio>
                          <Radio value={2}>2</Radio>
                          <Radio value={3}>3</Radio>
                          <Radio value={4}>4</Radio>
                          <Radio value={5}>5</Radio>
                          <span style={{ marginRight: 10, color: "green" }}>
                            Sangat Bagus Sekali
                          </span>
                        </RadioGroup>
                      )}
                    </FormItem>
                  );
                })}

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
      </React.Fragment>
    );
  }
}

const WrappedDashboard = Form.create()(Dashboard);

export default WrappedDashboard;
