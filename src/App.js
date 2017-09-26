import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import RemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import PersonAdd from "material-ui/svg-icons/social/person-add";
import ContentLink from "material-ui/svg-icons/content/link";
import Divider from "material-ui/Divider";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import Download from "material-ui/svg-icons/file/file-download";
import Delete from "material-ui/svg-icons/action/delete";
import FontIcon from "material-ui/FontIcon";

import "./static/css/base.css";

function getStyles() {
  return {
    left: {
      width: 200,
      height: "100%",
      position: "fixed",
      left: 0,
      top: 0,
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      float: "left"
    },
    right: {
      position: "absolute",
      right: 0,
      left: 200,
      minHeight: 800,
      backgroundColor: "#ccc"
    },
    logo: {
      width: "100%",
      height: 70,
      lineHeight: "70px",
      backgroundColor: "#222",
      color: "#fff",
      fontSize: 28
    },
    header: {
      width: "100%",
      height: 70,
      lineHeight: "70px",
      backgroundColor: "#333",
      color: "#fff",
      fontSize: 28,
      paddingLeft: 15
    }
  };
}
const style = {
  paper: {
    display: "inline-block",
    float: "left",
    margin: "16px 32px 16px 0"
  }
};
class App extends Component {
  state = this.getInitialState();
  getInitialState() {
    return { windowWidth: window.innerWidth };
  }
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };
  handleStyle = () => {};
  componentWillMount() {
    window.removeEventListener("resize", this.handleResize);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    const styles = getStyles();
    const { windowWidth } = this.state;
    return (
      <div>
        <div style={styles.left}>
          <div style={styles.logo}>menu</div>
          <MuiThemeProvider>
            <Paper>
              <Menu width={200} menuItemStyle={{ width: 200 }}>
                <MenuItem primaryText="概要" leftIcon={<RemoveRedEye />} />
                <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                <Divider />
                <MenuItem
                  primaryText="Make a copy"
                  leftIcon={<ContentCopy />}
                />
                <MenuItem primaryText="Download" leftIcon={<Download />} />
                <Divider />
                <MenuItem primaryText="Remove" leftIcon={<Delete />} />
              </Menu>
            </Paper>
          </MuiThemeProvider>
        </div>
        <div style={styles.right}>
          <div style={styles.header}>nav</div>
          <div>{windowWidth}</div>
        </div>
      </div>
    );
  }
}
export default App;
