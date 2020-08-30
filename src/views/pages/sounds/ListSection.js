import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import translation from './translation';
import {getSoundSections} from "../../../shared/services/apiService";
import DataTable from 'react-data-table-component';
import { Row, Col, Button } from 'reactstrap';

const SoundSection = props => {

  const[sections, setsections] = useState([]);

  const columns = [
    {selector: "id", name: `${translation.id}`, type: "text", sortable: true},
    {selector: "name", name: `${translation.name}`, type: "text", sortable: true},
    {selector: "createdAt", name: `${translation.created}`, type: "text", sortable: true},
    {selector: "updatedAt", name: `${translation.updated}`, type: "text", sortable: true},
    {name: `${translation.action}`, sortable: true, cell: row => populateActions(row)}
  ]

  useEffect(() => {
  //  props.onClear();
    getSoundSections().then(res => {
      if(res && res.data){
        res.data = res.data.map(item => ({
          ...item, dateTime: new Date(item.dateTime).valueOf()
        }));
        setsections(res.data);
      }
    }).catch(err => {
      //props.onError(err, "Error while fetching Sound Section details");
    });
  }, []);

  const populateActions = row => {
      return <div>
      <Button color="success" onClick={() => props.showHideListSection=false}><i className="fa fa-edit"></i>&nbsp;Edit</Button> &nbsp;
      <Button color="danger" onClick={() => props.deleteSoundSections(row.id)}><i className="fa fa-close"></i>&nbsp;Delete</Button>
      </div>
  }
  return(
    <>
      <Row>
        <Col sm="10" />
        <Col sm="2"><Button color="primary"onClick={() => props.addSoundSection}><i className="fa fa-check"></i>&nbsp;Add</Button></Col>
      </Row>
      <DataTable
        title="All Verification Request"
        columns={columns}
        data={sections}
        pagination={true}
        striped
        Clicked
        Selected={() => {}}
      />
    </>
  )
};
SoundSection.propTypes = {
  showHideListSection: PropTypes.bool.isRequired,
  showHideAddSection: PropTypes.bool.isRequired,
  onAddBtnClicked: PropTypes.func
};
export default SoundSection;
