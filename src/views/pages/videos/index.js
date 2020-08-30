import React, { Component } from "react";
import ListFile from './ListFile';


class Videos extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render(){
    return(
      <>
        <ListFile />
      </>
    )
  }
}
export default Videos;
