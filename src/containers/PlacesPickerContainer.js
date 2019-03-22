import React from "react";
import PlacePlaceholder from "../components/PlacePlacehoder";
import { connect } from "react-redux";

class PlacesPickerContainer extends React.Component {
   render() {
      return (
         <div className="places-picker">
            <PlacePlaceholder />
         </div>
      );
   }
}

export default connect()(PlacesPickerContainer);