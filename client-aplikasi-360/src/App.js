import React from "react";
import MainLayout from "./layout/Layout";

import TopNavigation from "./Navigation/TopNavigation";
import CreateResponden from "./Form/CreateResponden";
import UserDashboard from "./Dashboard/UserDashboard";
import SignIn from "./Form/Signin";
import AdminDashboard from "./Dashboard/AdminDashboard";
import HomeDashboard from "./Dashboard/HomeDashboard";

// import { dapatkanNilai } from "./Calcultaion/filter";
import { getResponden, getRole,} from "./Fetch/GetData";
// import { postUser } from "./Fetch/PostData";

// import { hitungQuestions } from "./Calcultaion/filter";

// import ModalDeletion from "./Basic/ModalDeletion";
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
    route: "admin-dashboard",
    currentUser: {
      full_name: "Eko Andri",
      user_id: 97,
      role_name: "Pimpinan",
      role_id: 1
    },
    isSignedIn: false,
    collapsed: true
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
    } else if (route === "signin") {
      this.setState({
        route: "signin"
      });
    } else if (route === "register") {
      this.setState({
        route: "register"
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
    const {
      route,
      currentUser,
      isSignedIn,
      siderStatus
    } = this.state;
    const { getUser, getDataResponden, loadUser, onRouteChange } = this;
    // const { Sider, Content, Footer } = Layout;
    const { onSiderChange } = this;

    return (
      <MainLayout
        onSiderChange={onSiderChange}
        onRouteChange={onRouteChange}
        header={
          <TopNavigation
            siderStatus={siderStatus}
            onRouteChange={onRouteChange}
          />
        }
      >
        {route === "admin-dashboard" ? (
          <AdminDashboard
            URL={URL}
            currentUser={currentUser}
            // dataUser={dataUser}
            // questions={questions}
          />
        ) : route === "signin" ? (
          <SignIn URL={URL} loadUser={loadUser} onRouteChange={onRouteChange} />
        ) : route === "dashboard" ? (
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
