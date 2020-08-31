import React, { Component } from "react";
import translation from './translation';
import {getDiscoverySections, getDiscoverySectionsById, putDiscoverySections, postDiscoverySections} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Row, Col, Form, FormGroup, Input, Button, Alert } from 'reactstrap';
import ListDiscovery from './List';
import AddDiscovery from './Add';


class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddDiscovery: false,
      error: null,
      discovery: [],
      response: {},
      isEditDiscovery: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  _getAllDiscoverySection(){
    getDiscoverySections().then(res => {
      if(res && res.data){
        res.data = res.data.map(item => ({
          ...item, dateTime: new Date(item.dateTime).valueOf()
        }));
        this.setState({
            discovery: res.data
        });
      }
    }).catch(err => {
      this.setState({ err });
      console.error("Error while fetching discovery details");
    });
  }

  onCreate() {
    this.setState({ isAddDiscovery: true });
  }

  onFormSubmit(data) {
    if(this.state.isEditDiscovery){
      putDiscoverySections(data.id, data).then(res => {
          this._getAllDiscoverySection();
          this.setState({
            isAddDiscovery: false,
            isEditDiscovery: false
          })
      }).catch(err => {
          this.setState({ err });
          console.error("Error in put discovery: " + err);
      })
    } else{
      postDiscoverySections(data).then(res => {
          this._getAllDiscoverySection();
          this.setState({
            isAddDiscovery: false,
            isEditDiscovery: false
          })
        }).catch(err => {
          this.setState({ err });
          console.error("Error in post discovery: " + err);
      })
    }

  }

  editDiscovery = id => {
    console.log("editDiscovery" + id);
    const formData = new FormData();
    formData.append('id', id);

    getDiscoverySectionsById(id).then(res =>{
      this.setState({
        discovery: res.data,
        isEditDiscovery: true,
        isAddDiscovery: true
      });
    }).catch(err => {
      this.setState({ err });
      console.error("Error in get discovery by id: " + err);
    })
  }

  render(){
    let discoveryForm;
    if(this.state.isAddDiscovery || this.state.isEditDiscovery) {
      discoveryForm = <AddDiscovery onFormSubmit={this.onFormSubmit} discovery={this.state.discovery} />
    }
    return(
      <>
        {!this.state.isAddDiscovery &&
          <Row>
            <Col md="10" />
            <Col md="2">
              <Button color="primary" onClick={() => this.onCreate()}>Add Discovery</Button>
            </Col>
          </Row>
        }
        {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
        {!this.state.isAddDiscovery && <ListDiscovery editDiscovery={this.editDiscovery}/>}
        { discoveryForm }
        {this.state.error && <div>Error: {this.state.error.message}</div>}
      </>
    )
  }
}
export default Discovery;
