import React, { Component } from "react";
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ListSection from './ListSection';
import AddSection from './AddSection';
import EditSection from './EditSection';
import ListFile from './ListFile';
import SoundSection from './Section';


class Sounds extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: '1',
      showHideListSection: false,
      showHideAddSection: false,
      showHideEditSection: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  hideComponent(name) {
    switch (name) {
        case "showHideListSection":
          this.setState({ showHideListSection: !this.state.showHideListSection });
          break;
        case "showHideAddSection":
          this.setState({ showHideAddSection: !this.state.showHideAddSection });
          break;
        case "showHideEditSection":
          this.setState({ showHideEditSection: !this.state.showHideEditSection });
          break;
        default:
          console.error("No case selected");
    }
  };
  addSoundSection () {
    console.log("Inside addSection..");
  };
  render(){
    const { showHideListSection, showHideAddSection, showHideEditSection} = this.props;
    return(
      <>
          <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                All Sounds
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                All Sections
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Sound Galary
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <ListFile />
            </TabPane>
            <TabPane tabId="2">
              <SoundSection />
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <h4>Just some tab content.</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </>
    )
  }
}
export default Sounds;
