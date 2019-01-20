import React from "react";
import MainLayout from "./layout/Layout";

import TopNavigation from "./Navigation/TopNavigation";
import CreateResponden from "./Form/CreateResponden";
import UserDashboard from "./Dashboard/UserDashboard";
import SignIn from "./Form/Signin";
import AdminDashboard from "./Dashboard/AdminDashboard";
// import AdminDashboard from "AdminDasboard";

import { dapatkanNilai } from "./Calcultaion/filter";
import { getResponden, getRole, getQuestions, getUsers } from "./Fetch/GetData";
// import { postUser } from "./Fetch/PostData";

// import { hitungQuestions } from "./Calcultaion/filter";

// import ModalDeletion from "./Basic/ModalDeletion";
// import { info, success } from "./Basic/InformationModal";
import Config from "./Fetch/ConfigData";
import "./App.css";
// import Dashboard from "./Dashboard/UserDashboard";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    visible: false,
    status: false,
    route: "admin-dashboard",
    currentUser: {
      full_name: "Eko Andri",
      user_id: 97,
      role_name: "Pimpinan",
      role_id: 1
    },
    isSignedIn: false,
    collapsed: true,
    dataUser: [],
    questions: [],
    dataPenilaian: []
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
    this.getDataUser();
    this.getDataQuestions();
    // this.setState({
    //   status: true
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.handleUpdateChange();
    // if (prevState.status !== this.state.status) {
    //   console.log("prevState.status", prevState.status);
    //   console.log("thisstate.status", this.state.status);
    //   console.log(this.state.questions);
    //   console.log(this.state.dataUser);
    //   this.getDataNilai();
    // }
  }

  getDataQuestions = () => {
    getQuestions(URL).then(res => {
      // console.log(res.data);
      this.setState({
        questions: res.data.map(data => ({
          nip_nim: data.nip_nim,
          responden_id: data.responden_id,
          role_id: data.role_id,
          K001: data.K001,
          K002: data.K002,
          K003: data.K003,
          K004: data.K004,
          K005: data.K005,
          K006: data.K006,
          K007: data.K007,
          K008: data.K008,
          K009: data.K009,
          K010: data.K010,
          K011: data.K011,
          K012: data.K012,
          K013: data.K013,
          K014: data.K014,
          K015: data.K015,
          K016: data.K016,
          K017: data.K017,
          K018: data.K018,
          K019: data.K019,
          K020: data.K020,
          K021: data.K021,
          K022: data.K022,
          K023: data.K023,
          K024: data.K024,
          K025: data.K025,
          K026: data.K026,
          K027: data.K027,
          K028: data.K028,
          K029: data.K029,
          K030: data.K030
        }))
      });
    });
  };

  getDataUser = () => {
    getUsers(URL).then(response => {
      this.setState({
        dataUser: response.data.map(data => ({
          nip_nim: data.nip_nim,
          name: data.name
        }))
      });
      // console.log(this.state.dataUser);
    });
  };

  getDataNilai = () => {
    const { dataUser, questions } = this.state;
    console.log(questions);
    console.log(dataUser);
    this.setState({
      dataPenilaian: dapatkanNilai(dataUser, questions).map(data => ({
        nip_nim: data.nip_nim,
        name: data.name,
        p1: data.P1,
        p2: data.P2,
        p3: data.P3,
        p4: data.P4,
        total: data.total,
        hasil: data.hasil
      }))
    });
    // return null;
  };

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

  // handleModalOk = () => {
  //   const companyID = this.state.companyID;
  //   const officeID = this.state.officeID;
  //   if (companyID) {
  //     deleteCompany(URL, companyID).then(res => {
  //       const code = res.data.code;
  //       if (code === 200) {
  //         this.handleUpdateChange(code);
  //         success("Success", "You have succesfully deleted a company!");
  //         deleteBranch(URL, companyID);
  //         this.setState({ companyID: 0 });
  //       } else {
  //         info("Info", "Deletion failed. Check your connection!");
  //       }
  //     });
  //   } else if (officeID) {
  //     deleteOffice(URL, officeID).then(res => {
  //       const code = res.data.code;
  //       if (code === 200) {
  //         this.handleUpdateChange(code);
  //         success("Success", "You have succesfully deleted a office!");
  //         this.setState({ officeID: 0, overView: true });
  //       } else {
  //         info("Info", "Deletion failed. Check your connection!");
  //       }
  //     });
  //   }
  //   this.setState({
  //     visible: false,
  //     overView: false,
  //     isCompany: true
  //   });
  // };

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

  onSiderChange = event => {
    const screenWidth = window.innerWidth;
    if (!event && screenWidth < 415) {
      this.setState({
        siderStatus: "smaller-header"
      });
    } else {
      this.setState({
        siderStatus: "header"
      });
    }
  };

  // =============== Render ===========================================

  render() {
    const {
      route,
      currentUser,
      isSignedIn,
      dataUser,
      questions
    } = this.state;
    const { getUser, getDataResponden, loadUser, onRouteChange } = this;
    // const { Sider, Content, Footer } = Layout;
    const { onSiderChange } = this;
    // console.log(questions);
    // console.log(offices);

    return (
      // <h1>Tes</h1>
      <MainLayout onSiderChange={onSiderChange}>
        {route === "admin-dashboard" ? (
          // <Col sm={{ span: 12, offset: 0 }}>
          <AdminDashboard
            URL={URL}
            currentUser={currentUser}
            dataUser={dataUser}
            questions={questions}
          />
        ) : // </Col>
        route === "admin" ? (
          <SignIn URL={URL} loadUser={loadUser} onRouteChange={onRouteChange} />
        ) : route === "dashboard" ? (
          // <Col sm={{ span: 24, offset: 0 }}>
          <UserDashboard currentUser={currentUser} URL={URL} />
        ) : // </Col>
        route === "home" ? (
          // <Col sm={{ span: 24, offset: 0 }}>
          <CreateResponden
            URL={URL}
            getUser={getUser}
            getDataResponden={getDataResponden}
            onRouteChange={onRouteChange}
          />
        ) : (
          // </Col>
          // <Col sm={{ span: 24, offset: 0 }}>
          <CreateResponden
            URL={URL}
            getUser={getUser}
            getDataResponden={getDataResponden}
          />
          // </Col>
        )}
      </MainLayout>
      // <Layout style={{ height: "100vh" }}>
      //   <TopNavigation
      //     currentUser={currentUser}
      //     onRouteChange={onRouteChange}
      //     isSignedIn={isSignedIn}
      //   />
      //   <Layout>
      //     <Sider
      //       collapsible
      //       collapsed={this.state.collapsed}
      //       onCollapse={this.onCollapse}
      //     >
      //       <div
      //       // style={{
      //       //   display: "flex",
      //       //   justifyContent: "center",
      //       //   alignItems: "center"
      //       // }}
      //       >
      //         <Col span={24}>
      //           <Row>
      //             <h3 style={{ textAlign: "center", marginTop: 20 }}>
      //               {currentUser.full_name}
      //             </h3>
      //           </Row>
      //           <Row>
      //             <p style={{ textAlign: "center" }}>{currentUser.role_name}</p>
      //           </Row>
      //         </Col>
      //       </div>
      //     </Sider>
      //     <Layout>
      //       <Content>
      //         <Row
      //           type="flex"
      //           justify="center"
      //           style={{
      //             // marginTop: "1em",
      //             padding: "1em"
      //           }}
      //         >
      //           {route === "admin-dashboard" ? (
      //             <Col sm={{ span: 12, offset: 0 }}>
      //               <AdminDashboard
      //                 URL={URL}
      //                 currentUser={currentUser}
      //                 dataUser={dataUser}
      //                 questions={questions}
      //               />
      //             </Col>
      //           ) : route === "admin" ? (
      //             <SignIn
      //               URL={URL}
      //               loadUser={loadUser}
      //               onRouteChange={onRouteChange}
      //             />
      //           ) : route === "dashboard" ? (
      //             <Col sm={{ span: 24, offset: 0 }}>
      //               <UserDashboard currentUser={currentUser} URL={URL} />
      //             </Col>
      //           ) : route === "home" ? (
      //             <Col sm={{ span: 24, offset: 0 }}>
      //               {/* <h1>Tes</h1> */}
      //               <CreateResponden
      //                 URL={URL}
      //                 getUser={getUser}
      //                 getDataResponden={getDataResponden}
      //                 onRouteChange={onRouteChange}
      //               />
      //             </Col>
      //           ) : (
      //             <Col sm={{ span: 24, offset: 0 }}>
      //               {/* <h1>Tes</h1> */}
      //               <CreateResponden
      //                 URL={URL}
      //                 getUser={getUser}
      //                 getDataResponden={getDataResponden}
      //               />
      //             </Col>
      //           )}
      //         </Row>
      //       </Content>
      //       <Footer>Footer</Footer>
      //     </Layout>
      //   </Layout>
      // </Layout>
      // // <Layout>
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
