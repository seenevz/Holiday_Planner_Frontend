import React from "react";
import PlaceCard from "../components/PlaceCard";
import { connect } from "react-redux";

class PlacesPickerContainer extends React.Component {
   render() {
      const placesResults = this.props.app.placesResults;
      const renderPlaces = placesResults.map(place => (
         <PlaceCard setPlaceCard={this.props.setPlaceCard} {...place} />
      ));

      return (
         <div className="create-trip-places-picker">
            {placesResults ? renderPlaces : ""}
         </div>
      );
   }
}

export default connect(
   state => ({ ...state }),
   dispatch => ({
      setPlaceCard: placeCard =>
         dispatch({ type: "SET_PLACE_CARD", payload: placeCard }),
   })
)(PlacesPickerContainer);
