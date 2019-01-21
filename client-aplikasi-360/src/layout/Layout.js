import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default class MainLayout extends React.Component {
  state = {
    currentKey: null,
    collapsed: true
  };

  handleClick = e => {
    this.setState({
      currentKey: e.key
    });
    if (e.key === "signin") {
      this.props.onRouteChange("signin");
    } else if (e.key === "register") {
      this.props.onRouteChange("register");
    } else if (e.key === "logout") {
      this.props.onRouteChange("home");
    } else if (e.key === "home") {
      this.props.onRouteChange("home");
    } else {
      return null;
    }
  };

  render() {
    // const { collapsed, collapsedWidth } = this.state;
    const { onSiderChange, children, header } = this.props;
    // console.log(collapsedWidth);

    return (
      <Layout>
        <Sider
          // trigger={null}
          // collapsible
          breakpoint="lg"
          collapsedWidth="0"
          // collapsed={collapsed}
          onBreakpoint={broken => {
            // console.log("broken", broken);
          }}
          onCollapse={(collapsed, type) => {
            onSiderChange(collapsed);
            // console.log("cc", collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
          >
            <Menu.Item key="home">
              <Icon type="user" />
              <span className="nav-text">Home</span>
            </Menu.Item>
            <Menu.Item key="register">
              <Icon type="user" />
              <span className="nav-text">Daftar</span>
            </Menu.Item>
            <Menu.Item key="signin">
              <Icon type="user" />
              <span className="nav-text">Login</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>{header}</Header>

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: 460,
                overflow: "initial"
              }}
            >
              {children}
            </div>
          </Content>

          <Footer style={{ textAlign: "center", lineHeight: 1 }}>
            <a
              href="https://subarnanto.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "grey" }}
            >
              Created by Eko Andri Subarnanto <br />
              <span>Web Developer and Designer</span>
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
