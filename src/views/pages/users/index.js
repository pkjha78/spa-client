import React, {useEffect, useState} from 'react';
import translation from './translation';
import {getAllUsers, putUserBlocked} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';

const Users = props => {
  const[users, setUsers] = useState([]);
  const columns = [
    {selector: "id", name: `${translation.id}`, type: "text", sortable: true},
    {name: `${translation.name}`, cell: row => <div>{row.firstName} {row.middleName} {row.lastName}</div>},
    {selector: "userName", name: `${translation.username}`, type: "text", sortable: true},
    {selector: "verified", name: `${translation.verified}`, type: "text", sortable: true, cell: row => populateVerified(row)},
    {selector: "device", name: `${translation.device}`, type: "text", sortable: true},
    {selector: "createdAt", name: `${translation.created}`, type: "text", sortable: true},
    {name: `${translation.action}`, sortable: true, cell: row => populateActions(row)}
  ]

  useEffect(() => {
    //  props.onClear();
    _getUsers();
  }, []);

  const _getUsers = () => {
    getAllUsers().then(res => {
      if(res && res.data){
        res.data = res.data.map(item => ({
          ...item, dateTime: new Date(item.dateTime).valueOf()
        }));
        setUsers(res.data);
      }
    }).catch(err => {
      props.onError(err, "Error while fetching user details");
    });
  }

  const populateVerified = row => {
    if(!row.verified){
      return <div><b>Unverified</b></div>
    }else{
      return <div>Verified</div>
    }
  }

  const populateActions = row => {
    if(!row.blocked){
      return <Button color="danger" onClick={() => onActionClick(row)}><i className="fa fa-ban"></i>&nbsp;Block</Button>
    }else{
      return <Button color="success" onClick={() => onActionClick(row)}><i className="fa fa-check"></i>&nbsp;Unblock</Button>
    }
  }

  const onActionClick = (row) => {
    //alert(row.blocked);
    console.log("Action: " + row.blocked)
    const reqObj = {
      "verified": !row.verified,
      "blocked": !row.blocked
    };
    putUserBlocked(row.id, reqObj).then(res => {
        //scrollToTop();
        _getUsers();
    }).catch(err => {
        //this.errorHandler(err, "error in put verification");
        console.error("Error in put block user: " + err);
    })

  }
  return(
    <DataTable
      title="All User Details"
      columns={columns}
      data={users}
      pagination={true}
      striped
    />
  );
};

export default Users;
