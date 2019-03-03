import React from "react";
import MainLayout from "./layout/Layout";

import TopNavigation from "./Navigation/TopNavigation";
import CreateResponden from "./Form/CreateResponden";
import UserDashboard from "./Dashboard/UserDashboard";
import SignIn from "./Form/Signin";
import AdminDashboard from "./Dashboard/AdminDashboard";
import HomeDashboard from "./Dashboard/HomeDashboard";

import {
  getResponden,
  getRole,
  getRepondenID,
  getRoleID
} from "./Fetch/GetData";
// import { postUser } from "./Fetch/PostData";
// import { info, success } from "./Basic/InformationModal";
import Config from "./Fetch/ConfigData";
import "./App.css";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    siderStatus: "header",
    visible: false,
    status: false,
    route: "signin",
    currentUser: {
      full_name: "",
      user_id: null,
      role_name: "",
      role_id: null
    },
    isSignedIn: false,
    collapsed: true,
    admin: true
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

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) { }

  // =============================================================

  // =========== Get Data from API ===============================

  getDataResponden = (URL, full_name) => {
    getResponden(URL, full_name).then(result => {
      // const data = result.data[0];
      console.log(result, full_name);
      // this.setState({
      //   currentUser: {
      //     id: data.user_id,
      //     nip_nim: data.responden_id,
      //     full_name: data.full_name,
      //     role_name: data.role_name
      //   },
      //   route: "dashboard"
      // });
    });
    return null;
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  loadUser = responden_id => {
    getRepondenID(URL, responden_id).then(res => {
      // const data = res.data[0];
      console.log(res);
      // getRoleID(URL, data.role_id).then(resp => {
      //   console.log(resp)
      //   const rolename = resp.data[0].role_name;
      //   this.setState({
      //     currentUser: {
      //       responden_id: data.responden_id,
      //       full_name: data.full_name,
      //       role_name: rolename
      //     }
      //   });
      // });
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
        },
        isSignedIn: true
      });
    } else if (route === "signin") {
      this.setState({
        route: "signin",
        admin: true
      });
    } else if (route === "user-login") {
      this.setState({
        route: "user-login",
        admin: false
      });
    } else if (route === "register") {
      this.setState({
        route: "register"
      });
    } else if (route === "admin-dashboard") {
      this.setState({
        route: "admin-dashboard",
        currentUser: {
          full_name: "Administrator"
        },
        isSignedIn: true
      });
    } else if (route === "home") {
      this.setState({
        route: "home",
        isSignedIn: false
      });
    } else if (route === "user-dashboard") {
      this.setState({
        route: "user-dashboard",
        isSignedIn: true,
        currentUser: {
          responden_id: nip_nim,
          full_name: full_name,
          role_id: role_id,
        },
      });
    }
  };

  handleLogin = () => { };

  // =================================================================

  // ====== Check Status (Add, Delete, Update) =======================

  handleUpdateChange = code => {
    if (code === 200) {
      this.setState({
        status: !this.state.status
      });
    }
  };

  // Ini fungsi supaya pada saat lebar layar kurang dari 415px
  // dan tombol collapsed nya ditekan, maka title{display: none}
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
    const { route, currentUser, isSignedIn, siderStatus, admin } = this.state;
    const { getUser, getDataResponden, loadUser, onRouteChange } = this;
    // const { Sider, Content, Footer } = Layout;
    const { onSiderChange } = this;

    return (
      <MainLayout
        onSiderChange={onSiderChange}
        onRouteChange={onRouteChange}
        isSignedIn={isSignedIn}
        header={
          <TopNavigation
            siderStatus={siderStatus}
            onRouteChange={onRouteChange}
          />
        }
      >
        {route === "admin-dashboard" ? (
          <AdminDashboard URL={URL} currentUser={currentUser} />
        ) : route === "signin" || route === "user-login" ? (
          <SignIn
            URL={URL}
            loadUser={loadUser}
            admin={admin}
            onRouteChange={onRouteChange}
          />
        ) : route === "user-dashboard" ? (
          <UserDashboard currentUser={currentUser} URL={URL} />
        ) : route === "register" ? (
          <CreateResponden
            URL={URL}
            getUser={getUser}
            getDataResponden={getDataResponden}
            onRouteChange={onRouteChange}
          />
        ) : (
                  <HomeDashboard onRouteChange={onRouteChange} />
                )}
      </MainLayout>
    );
  }
}

export default App;
