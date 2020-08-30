import React, {useEffect, useState} from 'react';
import translation from './translation';
import {getAllUsers} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';

const ListUser = props => {
  const[users, setUsers] = useState([]);
  const columns = [
    {selector: "id", name: `${translation.id}`, type: "text", sortable: true},
    {name: `${translation.name}`, cell: row => <div>{row.firstName} {row.middleName} {row.lastName}</div>},
    {selector: "userName", name: `${translation.username}`, type: "text", sortable: true},
    {selector: "device", name: `${translation.device}`, type: "text", sortable: true},
    {selector: "createdAt", name: `${translation.created}`, type: "text", sortable: true},
    {name: `${translation.action}`, sortable: true, cell: row => populateActions(row)}
  ]

  useEffect(() => {
    //  props.onClear();
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
  }, []);

  const populateActions = row => {
    if(!row.blocked){
      return <Button color="danger" onClick={onActionClick(row)}><i className="fa fa-ban"></i>&nbsp;Block</Button>
    }else{
      return <Button color="success" onClick={onActionClick(row)}><i className="fa fa-check"></i>&nbsp;Unblock</Button>
    }
  }

  const onActionClick = (row) => {
    //alert(row.blocked);
    console.log(row.blocked)
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

export default ListUser;
