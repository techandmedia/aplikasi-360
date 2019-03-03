import React from "react";
import {
  Form,
  Input,
  // Select,
  Row,
  Col,
  Card,
  Button,
  Cascader,
  Radio
} from "antd";
import { formItemLayout, tailFormItemLayout } from "../Basic/FormLayout";
import { success, info } from "../Basic/InformationModal";

import { getRole, getSoal } from "../Fetch/GetData";
import { postResponden, postPenilaianSendiri } from "../Fetch/PostData";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class CreateResponden extends React.Component {
  constructor(props) {
    super(props);
    this.state = { role: null, soal: [] };
  }

  componentDidMount() {
    this.getDataRole();
    this.getDataSoal();
  }

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
    getSoal(this.props.URL).then(response => {
      // console.log(response.data);
      this.setState({
        soal: response.data.map(data => ({
          id: data.soal_id,
          soal: data.soal
        }))
      });
      // console.log(this.state.soal);
    });
    return null;
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(e)
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(values);
      const nip_nim = values.nip_nim;
      const full_name = values.full_name;
      const role_id = values.role[0];
      // const K001 = values.K001;
      // const K002 = values.K002;
      // const K003 = values.K003;
      // const K004 = values.K004;
      // const K005 = values.K005;
      // const K006 = values.K006;
      // const K007 = values.K007;
      // const K008 = values.K008;
      // const K009 = values.K009;
      // const K010 = values.K010;
      // const K011 = values.K011;
      // const K012 = values.K012;
      // const K013 = values.K013;
      // const K014 = values.K014;
      // const K015 = values.K015;
      // const K016 = values.K016;
      // const K017 = values.K017;
      // const K018 = values.K018;
      // const K019 = values.K019;
      // const K020 = values.K020;
      // const K021 = values.K021;
      // const K022 = values.K022;
      // const K023 = values.K023;
      // const K024 = values.K024;
      // const K025 = values.K025;
      // const K026 = values.K026;
      // const K027 = values.K027;
      // const K028 = values.K028;
      // const K029 = values.K029;
      // const K030 = values.K030;

      // console.log("K030",K030)

      const URL = this.props.URL;

      // const { overView, handleStayInOverview, handleUpdateChange } = this.props;
      // console.log(full_name, role_id, K030);
      // postUser(URL, full_name).then(res => {
      //   console.log(res);
      // });

      // this.props.getUser(full_name)

      if (!err) {
        // Post sebagai Responden Baru
        postResponden(URL, nip_nim, full_name, role_id).then(res => {
          const code = res.data.code;
          if (code === 200) {
            // Ambil Responden yang sudah di post
            // this.props.getDataResponden(URL, full_name);
            // handleUpdateChange(code);
            // console.log("K030",K030)
            // postPenilaianSendiri(
            //   URL,
            //   nip_nim,
            //   K001,
            //   K002,
            //   K003,
            //   K004,
            //   K005,
            //   K006,
            //   K007,
            //   K008,
            //   K009,
            //   K010,
            //   K011,
            //   K012,
            //   K013,
            //   K014,
            //   K015,
            //   K016,
            //   K017,
            //   K018,
            //   K019,
            //   K020,
            //   K021,
            //   K022,
            //   K023,
            //   K024,
            //   K025,
            //   K026,
            //   K027,
            //   K028,
            //   K029,
            //   K030
            // );
            // success("Success", "Anda berhasil melakukan penilaian diri");
            this.props.onRouteChange("user-dashboard", nip_nim, full_name, role_id);
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

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={18}>
          <Card
            title="Form Input Kuesioner"
            headStyle={{
              fontWeight: 500,
              fontSize: 22,
              color: "#696969"
            }}
          >
            <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem
                {...formItemLayout}
                label={"NIP/NIM"}
                className="label-style"
              >
                {getFieldDecorator("nip_nim", {
                  rules: [
                    {
                      required: true,
                      message: "Harap masukkan NIP/NIM Anda!"
                    }
                  ]
                })(<Input placeholder="NIP / NIM" />)}
              </FormItem>

              <FormItem
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

              <FormItem {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginBottom: -60 }}
                >
                  Create
                </Button>
              </FormItem>
{/* 
              {this.state.soal.map(data => {
                return (
                  <FormItem
                    {...formItemLayout}
                    label={data.soal}
                    key={data.id}
                    style={{ marginTop: 30 }}
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
                      <RadioGroup
                        onChange={this.onChange}
                        // Warning: `getFieldDecorator` will override `value`,
                        // so please don't set `value` directly and use `setFieldsValue` to set it.
                        // Dont put value here:
                        // value={this.state.radioValue}
                      >
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
              })} */}
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedCreateResponden = Form.create()(CreateResponden);

export default WrappedCreateResponden;
