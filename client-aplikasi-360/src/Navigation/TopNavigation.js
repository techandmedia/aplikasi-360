import React from "react";
import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Popover,
  Avatar,
  Badge
  // Input
} from "antd";
// import Clock from '../Basic Component/Clock'

// import { FloatRightButton } from "../Basic Component/Button";

const { Header } = Layout;
// const Search = Input.Search;
const SubMenu = Menu.SubMenu;

const content = (
  isSignedIn,
  handleClick,
  current,
  currentUser,
  notifications
) => (
  <Menu
    // id="nav"
    onClick={handleClick}
    selectedKeys={[current]}
    mode="vertical"
  >
    <Menu.Item key="book">
      <Icon type="book" theme="twoTone" twoToneColor="#52c41a" />
      Aplikasi Quesioner
    </Menu.Item>
    <Menu.Item key="siakad">
      <Icon type="appstore" theme="twoTone" twoToneColor="#52c41a" />
      Tentang Siakad
    </Menu.Item>
    {isSignedIn ? (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Badge count={4}>
              Welcome
              {/* {currentUser} */}
              <Avatar
                shape="square"
                icon="user"
                style={{
                  marginLeft: 15,
                  backgroundColor: "orange",
                  verticalAlign: "middle",
                  paddingLeft: 8
                }}
              />
            </Badge>
          </span>
        }
      >
        <Menu.Item key="logout">Logout</Menu.Item>
      </SubMenu>
    ) : (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Member
          </span>
        }
      >
        <Menu.Item key="login">Login</Menu.Item>
        {/* <Menu.Item key="register">Register</Menu.Item> */}
      </SubMenu>
    )}
  </Menu>
);

class TopNavigation extends React.Component {
  state = {
    current: null
  };

  handleClick = e => {
    // console.log("click ", e);
    this.setState({
      current: e.key
    });
    if (e.key === "login") {
      this.props.onRouteChange("admin");
    } else if (e.key === "logout") {
      this.props.onRouteChange("home");
    } else {
      return null;
    }
  };

  render() {
    const { currentUser, isSignedIn, notifications, schoolName } = this.props;
    const { current } = this.state;
    const { handleClick } = this;
    // console.log(this.props);

    return (
      <Header id="header" className="clearfix">
        {/* <Popover
          trigger="click"
          content={content(
            isSignedIn,
            handleClick,
            current,
            currentUser,
            notifications
          )}
          className="anticon anticon-menu nav-phone-icon"
        > */}
        <Icon
          type="bars"
          theme="outlined"
          className="anticon anticon-menu nav-phone-icon"
        />
        {/* </Popover> */}
        <Row>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={5}>
            <a id="logo" onClick={() => this.props.onRouteChange("home")}>
             Sistem Informasi Pengolahan Kuesioner 
            </a>
          </Col>
          <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
            <Menu
              id="nav"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="book">
                <Icon type="book" theme="twoTone" twoToneColor="#52c41a" />
                Aplikasi Quesioner
              </Menu.Item>
              <Menu.Item key="siakad">
                <Icon type="appstore" theme="twoTone" twoToneColor="#52c41a" />
                Welcome
                {/* {currentUser.full_name} */}
              </Menu.Item>
              {isSignedIn ? (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Badge count={5}>
                        Welcome
                        {/* {currentUser} */}
                        <Avatar
                          shape="square"
                          icon="user"
                          style={{
                            marginLeft: 15,
                            backgroundColor: "orange",
                            verticalAlign: "middle",
                            paddingLeft: 8
                          }}
                        />
                      </Badge>
                    </span>
                  }
                >
                  <Menu.Item key="logout">Logout</Menu.Item>
                </SubMenu>
              ) : (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon
                        type="setting"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />
                      Member
                    </span>
                  }
                >
                  <Menu.Item key="login">Login</Menu.Item>
                  <Menu.Item key="register">Register</Menu.Item>
                </SubMenu>
              )}
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default TopNavigation;
