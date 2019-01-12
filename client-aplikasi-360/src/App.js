import React from "react";
import { Row, Col, Layout } from "antd";

import TopNavigation from "./Navigation/TopNavigation";
import CreateResponden from "./Form/CreateResponden";
import UserDashboard from "./Dashboard/UserDashboard";
import SignIn from "./Form/Signin";
import AdminDashboard from "./Dashboard/AdminDashboard";
// import AdminDashboard from "AdminDasboard";

import { deleteCompany, deleteOffice, deleteBranch } from "./Fetch/DeleteData";
import { getResponden, getRole } from "./Fetch/GetData";
// import { postUser } from "./Fetch/PostData";

// import ModalDeletion from "./Basic/ModalDeletion";
import { info, success } from "./Basic/InformationModal";
import Config from "./Fetch/ConfigData";
import "./CSS/App.css";
import "./CSS/ant-custom.css";
// import Dashboard from "./Dashboard/UserDashboard";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    visible: false,
    status: false,
    route: "dashboard",
    currentUser: {
      full_name: "Admin",
      user_id: 97,
      role_name: "Pimpinan",
      role_id: 1
    },
    isSignedIn: false,
    collapsed: false
  };

  // Binding function in onClick or onSubmit

  // Take note: this create new function and cause React to
  // re render each time this function got called
  // onClick={() => handleClick({ item })}
  // onClick={(e) => handleClick(e)}
  // if you don't need to pass an argument, just called like this:
  // onClick={handleCompanyChange}
  // if you need the argument, then bind with this
  // onClick={handleCompanyChange.bind(this,{ item })}
  // if you need to receive an event(e), call it like this
  // this.handleSubmit.bind(this)}
  // if it's a props
  // onClick={props.handleSubmit.bind(this)}
  // or with destructuring
  // onClick={handleSubmit.bind(this)}

  // ===============  Life Cycle Hooks ===========================

  componentDidMount() {
    // this.getDataCompanies();
    // this.getDataOffices();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState.status", prevState.status);
    // console.log("thisstate.status", this.state.status);
    this.handleUpdateChange();
    if (prevState.status !== this.state.status) {
      this.getDataCompanies();
      this.getDataOffices();
    }
  }

  // =============================================================

  // =========== Get Data from API ===============================

  getDataResponden = (URL, full_name) => {
    getResponden(URL, full_name).then(result => {
      const data = result.data[0];
      // console.log(result, full_name);
      this.setState({
        currentUser: {
          id: data.user_id,
          nip_nim: data.nip_nim,
          full_name: data.full_name,
          role_name: data.role_name
        },
        route: "dashboard"
      });
    });
    return null;
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  loadUser = data => {
    console.log(data);
    // this.setState({
    //   users: {
    //     id: data.id,
    //     first_name: data.first_name,
    //     last_name: data.last_name,
    //     email: data.email,
    //     role: data.role
    //   }
    // });
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

  // ===============================================================

  // =============== Delete Company / Office =======================

  showModalDeletion = () => {
    this.setState({
      visible: true
    });
  };

  handleModalOk = () => {
    const companyID = this.state.companyID;
    const officeID = this.state.officeID;
    if (companyID) {
      deleteCompany(URL, companyID).then(res => {
        const code = res.data.code;
        if (code === 200) {
          this.handleUpdateChange(code);
          success("Success", "You have succesfully deleted a company!");
          deleteBranch(URL, companyID);
          this.setState({ companyID: 0 });
        } else {
          info("Info", "Deletion failed. Check your connection!");
        }
      });
    } else if (officeID) {
      deleteOffice(URL, officeID).then(res => {
        const code = res.data.code;
        if (code === 200) {
          this.handleUpdateChange(code);
          success("Success", "You have succesfully deleted a office!");
          this.setState({ officeID: 0, overView: true });
        } else {
          info("Info", "Deletion failed. Check your connection!");
        }
      });
    }
    this.setState({
      visible: false,
      overView: false,
      isCompany: true
    });
  };

  handleModalCancel = e => {
    this.setState({
      visible: false
    });
  };

  // =============================================================

  // ======== Handle View Change =================================
  // Make individual company

  onRouteChange = (route, nip_nim, full_name, role_id) => {
    if (route === "dashboard") {
      this.setState({
        route: "dashboard",
        currentUser: {
          full_name: full_name,
          role_id: role_id,
          user_id: nip_nim
        },
        isSignedIn: true
      });
    } else if (route === "admin") {
      this.setState({
        route: "admin"
      });
    } else if (route === "admin-dashboard") {
      this.setState({
        route: "admin-dashboard",
        isSignedIn: true
      });
    } else if (route === "home") {
      this.setState({
        route: "home",
        isSignedIn: false
      });
    }
  };

  handleLogin = () => {};

  // =================================================================

  // ====== Check Status (Add, Delete, Update) =======================

  handleUpdateChange = code => {
    if (code === 200) {
      this.setState({
        status: !this.state.status
      });
    }
  };

  // =============== Render ===========================================

  render() {
    const { route, currentUser, isSignedIn } = this.state;
    const { getUser, getDataResponden, loadUser, onRouteChange } = this;
    const { Sider, Content, Footer } = Layout;
    // console.log(companies);
    // console.log(offices);

    return (
      <Layout style={{ height: "100vh" }}>
        <TopNavigation
          currentUser={currentUser}
          onRouteChange={onRouteChange}
          isSignedIn={isSignedIn}
        />
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center"
            // }}
            >
              <Col span={24}>
                <Row>
                  <h3 style={{ textAlign: "center", marginTop: 20 }}>
                    {currentUser.full_name}
                  </h3>
                </Row>
                <Row>
                  <p style={{ textAlign: "center" }}>{currentUser.role_name}</p>
                </Row>
              </Col>
            </div>
          </Sider>
          <Layout>
            <Content>
              <Row
                type="flex"
                justify="center"
                style={{
                  // marginTop: "1em",
                  padding: "1em"
                }}
              >
                {route === "admin-dashboard" ? (
                  <Col sm={{ span: 12, offset: 0 }}>
                    <AdminDashboard URL={URL} currentUser={currentUser} />
                  </Col>
                ) : route === "admin" ? (
                  <SignIn
                    URL={URL}
                    loadUser={loadUser}
                    onRouteChange={onRouteChange}
                  />
                ) : route === "dashboard" ? (
                  <Col sm={{ span: 24, offset: 0 }}>
                    <UserDashboard currentUser={currentUser} URL={URL} />
                  </Col>
                ) : route === "home" ? (
                  <Col sm={{ span: 24, offset: 0 }}>
                    {/* <h1>Tes</h1> */}
                    <CreateResponden
                      URL={URL}
                      getUser={getUser}
                      getDataResponden={getDataResponden}
                      onRouteChange={onRouteChange}
                    />
                  </Col>
                ) : (
                  <Col sm={{ span: 24, offset: 0 }}>
                    {/* <h1>Tes</h1> */}
                    <CreateResponden
                      URL={URL}
                      getUser={getUser}
                      getDataResponden={getDataResponden}
                    />
                  </Col>
                )}
              </Row>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
      // <Layout>
      //   <TopNavigation
      // currentUser={currentUser}
      // onRouteChange={onRouteChange}
      // isSignedIn={isSignedIn}
      //   />
      // <Row
      //   type="flex"
      //   justify="center"
      //   style={{
      //     // marginTop: "1em",
      //     padding: "1em"
      //   }}
      // >
      //   {route === "admin-dashboard" ? (
      //     <Col sm={{ span: 12, offset: 0 }}>
      //       <AdminDashboard URL={URL} />
      //     </Col>
      //   ) : route === "admin" ? (
      //     <SignIn
      //       URL={URL}
      //       loadUser={loadUser}
      //       onRouteChange={onRouteChange}
      //     />
      //   ) : route === "dashboard" ? (
      //     <Col sm={{ span: 24, offset: 0 }}>
      //       <UserDashboard currentUser={currentUser} URL={URL} />
      //     </Col>
      //   ) : route === "home" ? (
      //     <Col sm={{ span: 24, offset: 0 }}>
      //       {/* <h1>Tes</h1> */}
      //       <CreateResponden
      //         URL={URL}
      //         getUser={getUser}
      //         getDataResponden={getDataResponden}
      //       />
      //     </Col>
      //   ) : (
      //     <Col sm={{ span: 24, offset: 0 }}>
      //       {/* <h1>Tes</h1> */}
      //       <CreateResponden
      //         URL={URL}
      //         getUser={getUser}
      //         getDataResponden={getDataResponden}
      //       />
      //     </Col>
      //   )}
      // </Row>
      //   {/* <ModalDeletion
      //     visible={visible}
      //     handleModalOk={handleModalOk}
      //     handleModalCancel={handleModalCancel}
      //   /> */}
      // </Layout>
    );
  }
}

export default App;
