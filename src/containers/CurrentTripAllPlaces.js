import React from "react";
import { connect } from "react-redux";

class CurrentTripAllPlaces extends React.Component {
   render() {
      return <div>Current Trip Name: </div>;
   }
}

export default connect(state => ({ ...state }))(CurrentTripAllPlaces);
