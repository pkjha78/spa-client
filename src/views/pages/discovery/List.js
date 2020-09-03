import React, { Component } from "react";
import translation from './translation';
import {getDiscoverySections, deleteDiscoverySections} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';

class ListDiscovery extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      discovery: [],
      response: {}
    };
  }
  columns = [
    {selector: "id", name: `${translation.id}`, type: "text", sortable: true},
    {selector: "name", name: `${translation.name}`, type: "text", sortable: true},
    {selector: "createdAt", name: `${translation.created}`, type: "text", sortable: true},
    {name: `${translation.action}`, sortable: true, cell: row => this.populateActions(row)}
  ]

  populateActions(row) {
      return <div>
        <Button color="success"><i className="fa fa-edit" onClick={() => this.props.editDiscovery(row.id)}></i>&nbsp;Edit</Button> &nbsp;
        <Button color="danger"><i className="fa fa-close" onClick={() => this.onDelete()}></i>&nbsp;Delete</Button>
      </div>
  }
  onDelete() {
    console.log("onDelete");
  }
  deleteDiscovery(id){
    console.log("delete Discovery: " + id);
    deleteDiscoverySections(id).then(res => {

    }).catch(err => {
        console.error("Error in delete verification: " + err);
    })

  }
  componentDidMount() {
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
  render(){
    const { discovery} = this.state;
    return(
      <>
        <DataTable
          title="All Discovery Sections"
          columns={this.columns}
          data={discovery}
          pagination={true}
          striped
        />
      </>
    )
  }
}
export default ListDiscovery;
