import React from "react";
import PlacePlaceholder from "../components/PlacePlacehoder";

class PlacesSelectedContainer extends React.Component {
   render() {
      return (
         <div className="selected-places">
            <PlacePlaceholder />
            <PlacePlaceholder />
            <PlacePlaceholder />
         </div>
      );
   }
}

export default PlacesSelectedContainer;
