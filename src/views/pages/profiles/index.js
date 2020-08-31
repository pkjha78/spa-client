import React, {useEffect, useState} from 'react';
import translation from './translation';
import {getAllVerifications, putVerifications} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';

const Profiles = props => {
  const[verifications, setVerifications] = useState([]);
  const columns = [
    {selector: "id", name: `${translation.id}`, type: "text", sortable: true},
    {selector: "name", name: `${translation.name}`, type: "text", sortable: true},
    {selector: "userName", name: `${translation.username}`, type: "text", sortable: true},
    {selector: "blocked", name: `${translation.blocked}`, sortable: true, cell: row => populateBlocked(row)},
    {selector: "attachment", name: `${translation.attachment}`, type: "text", sortable: true},
    {selector: "createdAt", name: `${translation.created}`, type: "text", sortable: true},
    {name: `${translation.action}`, sortable: true, cell: row => populateActions(row)}
  ]

  useEffect(() => {
  //  props.onClear();
    _getVerification();

  }, []);

  const _getVerification = () => {
    getAllVerifications().then(res => {
      if(res && res.data){
        res.data = res.data.map(item => ({
          ...item, dateTime: new Date(item.dateTime).valueOf()
        }));
        setVerifications(res.data);
      }
    }).catch(err => {
      props.onError(err, "Error while fetching user's Profile Verification details");
    });
  };

  const populateActions = row => {
    if(row.verified){
      return <Button color="success" onClick={() => onVerActionClick(row)}><i className="fa fa-check"></i>&nbsp;Verified</Button>
    }else{
      return <Button color="danger" onClick={() => onUnVerActionClick(row)}><i className="fa fa-ban"></i>&nbsp;Unverified</Button>
    }
  }

  const populateBlocked = row => {
    if(!row.verified){
      return <div>Unblocked</div>
    }else{
      return <div><b>Blocked</b></div>
    }
  }

  const onVerActionClick = (row) => {
    //alert(row.blocked);
    console.log("verified" + row.verified)
    const reqObj = {
      "verified": false
    };
    putVerifications(row.id, reqObj).then(res => {
        //scrollToTop();
        _getVerification();
    }).catch(err => {
        //this.errorHandler(err, "error in put verification");
        console.error("Error in put verification: " + err);
    })
  }
  const onUnVerActionClick = (row) => {
    console.log("verified" + row.verified)
    const reqObj = {
      "verified": true
    };
    putVerifications(row.id, reqObj).then(res => {
        _getVerification();
    }).catch(err => {
        //this.errorHandler(err, "error in put verification");
        console.error("Error in put verification: " + err);
    })
  }
  return(
    <DataTable
      title="All Verification Request"
      columns={columns}
      data={verifications}
      pagination={true}
      striped
    />
  );
};

export default Profiles;
