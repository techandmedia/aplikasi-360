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
import {
  getSoal,
  getUsers,
  getRole,
  getCheckDuplicate
} from "../Fetch/GetData";
import {
  HitungC1,
  HitungC2,
  HitungC3,
  HitungC4,
  HitungC5,
  HitungC6,
  HitungC7,
  hitungHasil
} from "../Calcultaion/calcultate";
import { postPertanyaan, postPenilai } from "../Fetch/PostData";
import { formItemLayout, tailFormItemLayout } from "../Basic/FormLayout";
import { info, success, warning } from "../Basic/InformationModal";
import Config from "../Fetch/ConfigData";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Dashboard extends React.Component {
  state = {
    soal: [],
    users: [],
    radioValue: 0,
    thisUser: null
  };

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
    getRole(URL).then(response => {
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
    // const URL = this.props.URL;
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
      let responden_id = this.props.currentUser.responden_id;
      let nip_nim = fieldsValue.user_id[0]; // nip_nim
      // let user_id = fieldsValue.user_id[0];
      let role_id = fieldsValue.role[0];
      // const URL = this.props.URL;
      // console.log(responden_id);
      let K001 = role_id === 1 ? fieldsValue.K001 : 0;
      let K002 = role_id === 1 ? fieldsValue.K002 : 0;
      let K003 = role_id === 1 ? fieldsValue.K003 : 0;
      let K004 = role_id === 1 ? fieldsValue.K004 : 0;
      let K005 = fieldsValue.K005;
      let K006 = fieldsValue.K006;
      let K007 = fieldsValue.K007;
      let K008 = fieldsValue.K008;
      let K009 = fieldsValue.K009;
      let K010 = fieldsValue.K010;
      let K011 = fieldsValue.K011;
      let K012 = fieldsValue.K012;
      let K013 = fieldsValue.K013;
      let K014 = fieldsValue.K014;
      let K015 = fieldsValue.K015;
      let K016 = fieldsValue.K016;
      let K017 = fieldsValue.K017;
      let K018 = fieldsValue.K018;
      let K019 = fieldsValue.K019;
      let K020 = fieldsValue.K020;
      let K021 = fieldsValue.K021;
      let K022 = fieldsValue.K022;
      let K023 = fieldsValue.K023;
      let K024 = fieldsValue.K024;
      let K025 = fieldsValue.K025;
      let K026 = fieldsValue.K026;
      let K027 = fieldsValue.K027;
      let K028 = fieldsValue.K028;
      let K029 = fieldsValue.K029;
      let K030 = fieldsValue.K030;

      const C1 = HitungC1(K001, K002, K003, K004);
      const C2 = HitungC2(role_id, K005, K006, K007);
      const C3 = HitungC3(role_id, K008, K009, K010);
      const C4 = HitungC4(role_id, K011, K012, K013);
      const C5 = HitungC5(role_id, K014, K015, K016, K017);
      const C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
      const C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);

      const TotalNilai =
        C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;
      const hasil = hitungHasil(TotalNilai);

      let date = Date();
      console.log(date);

      console.log(C1, C2, C3, C4, C5, C6, C7, TotalNilai, hasil);

      if (err) {
        info(
          "Error",
          "There's something wrong with the connection, please try again latter"
        );
        return null;
      } else {
        // Check duplicate
        getCheckDuplicate(URL, responden_id, nip_nim).then(res => {
          const code = res.data.code;
          const message = res.data.success;
          console.log(message);
          // Kalau code === 200, tidak ada duplikasi, isi data
          if (code === 200) {
            postPertanyaan(
              URL,
              nip_nim,
              responden_id,
              role_id,
              K001,
              K002,
              K003,
              K004,
              K005,
              K006,
              K007,
              K008,
              K009,
              K010,
              K011,
              K012,
              K013,
              K014,
              K015,
              K016,
              K017,
              K018,
              K019,
              K020,
              K021,
              K022,
              K023,
              K024,
              K025,
              K026,
              K027,
              K028,
              K029,
              K030,
              date
            ).then(res => {
              const code = res.data.code;
              console.log(code);
              if (code === 200) {
                // post
                success(
                  "Success",
                  "Anda berhasil melakukan review. Ulangi lagi untuk user lainnya."
                );
                // Tabel penilaian_penilai
                if (role_id === 1) {
                  console.log(
                    "pimpinan",
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                  postPenilai(
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                } else if (role_id === 2) {
                  console.log(
                    "rekan",
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                  postPenilai(
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                } else if (role_id === 3) {
                  console.log(
                    "bawahan",
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                  postPenilai(
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                } else if (role_id === 4) {
                  console.log(
                    "mahasiswa",
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                  postPenilai(
                    URL,
                    nip_nim,
                    responden_id,
                    C1,
                    C2,
                    C3,
                    C4,
                    C5,
                    C6,
                    C7
                  );
                }
              }
            });
            // Kalau code === 201, ada duplikasi, batalkan isi data
          } else if (code === 201) {
            warning("Warning", `Anda sudah melakukan penilaian untuk user ini`);
          } else {
            info(
              "Error",
              "There's something wrong with the connection, please try again latter"
            );
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentUser } = this.props;
    // const { id } = this.state.data;

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

                <FormItem {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginBottom: -60 }}
                  >
                    Create
                  </Button>
                </FormItem>

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
