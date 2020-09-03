import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
import UploadService, {getAllVideos} from "../../../shared/services/apiService";

const ListFile = props => {
  const [fileInfos, setFileInfos] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    getAllVideos().then(res => {
      if(res && res.data){
        res.data = res.data.map(item => ({
          ...item, dateTime: new Date(item.dateTime).valueOf()
        }));
        setFileInfos(res.data);
      }
    }).catch(err => {
    //  props.onError(err, "Error while fetching Videos details");
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setShowProgress(true);
    setCurrentFile(currentFile);

    UploadService.uploadVideo(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        setShowProgress(false);
        return getAllVideos();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return(
    <div>
      {showProgress && currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <label className="btn btn-default">
        <input type="file" onChange={selectFile} />
      </label>

      <button
        className="btn btn-success"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </button>

      <div className="alert alert-light" role="alert">
        {message}
      </div>
      <div className="card">
          <div className="card-header">List of Video Files</div>
          <Row>
            {fileInfos &&
              fileInfos.map((file, index) => (
                <Col md={2}>
                <Card>
                  <CardHeader>
            				{file.name}
            			</CardHeader>
            			<CardBody>
                    <div className="embed-responsive embed-responsive-16by9">
                      <video width="40" height="40" controls>
                          <source src={file.url} type="video/mp4" />
                      </video>
                    </div>
                    <div style={{float:"left"}}>
                      <a href="?p=sounds&amp;page=sound&amp;action=deleteSound&amp;id=3627" >
                      <span className="fa fa-trash-o"></span>
                      &nbsp;Delete
                      </a>
                   </div>
    			        </CardBody>
                </Card>
                </Col>
              ))}
          </Row>
      </div>
    </div>
  )
}
export default ListFile;
