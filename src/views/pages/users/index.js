import React, { Component } from "react";
import ListUser from './ListUser';
import EditUser from './EditUser';
import AddUser from './AddUser';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideListUser: true,
      showHideEditUser: false,
      showHideAddUser: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideListUser":
        this.setState({ showHideListUser: !this.state.showHideListUser });
        break;
      case "showHideEditUser":
        this.setState({ showHideEditUser: !this.state.showHideEditUser });
        break;
      case "showHideAddUser":
        this.setState({ showHideAddUser: !this.state.showHideAddUser });
        break;
      default:
        console.error("No case selected");
    }
  }

  render() {
    const { showHideListUser, showHideEditUser, showHideAddUser } = this.state;
    return (
      <div>
        {showHideListUser && <ListUser />}

        {showHideEditUser && <EditUser />}

        {showHideAddUser && <AddUser />}

        <div>
          <button onClick={() => this.hideComponent("showHideListUser")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.hideComponent("showHideEditUser")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => this.hideComponent("showHideAddUser")}>
            Click to hide Demo3 component
          </button>
        </div>
      </div>
    )
  }
}

export default Users;
