import React from "react";
import PlaceCard from "../components/PlaceCard";
import { connect } from "react-redux";

class PlacesPickerContainer extends React.Component {
   render() {
      const placesResults = this.props.app.placesResults;
      const renderPlaces = placesResults.map(place => <PlaceCard {...place} />);

      return (
         <div className="create-trip-places-picker">
            {placesResults ? renderPlaces : ""}
         </div>
      );
   }
}

export default connect(state => ({ ...state }))(PlacesPickerContainer);
