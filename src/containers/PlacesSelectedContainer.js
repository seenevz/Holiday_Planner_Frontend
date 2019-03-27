import React from "react";
import { connect } from "react-redux";

import PlaceCard from "../components/PlaceCard";

class PlacesSelectedContainer extends React.Component {
   render() {
      const selectedPlaces = this.props.trip.places.map(place => (
         <PlaceCard key={place.id} {...place} />
      ));
      return <div className="selected-places">{selectedPlaces}</div>;
   }
}

export default connect(state => ({ ...state }))(PlacesSelectedContainer);
