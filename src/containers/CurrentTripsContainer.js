import React from "react";
import { connect } from "react-redux";

import CurrentTrips from "./CurrentTrips";
import CurrentTripAllPlaces from "./CurrentTripAllPlaces";

class CurrentTripsContainer extends React.Component {
   componentDidMount() {
      this.props.fetchTrips();
   }

   render() {
      return (
         <div className="current-trips-container">
            {this.props.trip.current ? (
               <CurrentTripAllPlaces />
            ) : (
               <>
                  <div className="current-trips-create">
                     <button
                        onClick={() => this.props.setSection("createTrip")}
                     >
                        Create a trip
                     </button>
                  </div>
                  <CurrentTrips
                     setSelectedTrip={this.props.setSelectedTrip}
                     trips={this.props.app.currentTrips}
                  />{" "}
               </>
            )}
         </div>
      );
   }
}

export default connect(
   state => ({ ...state }),
   dispatch => ({
      setSection: section =>
         dispatch({ type: "SET_SECTION", payload: section }),
      setTrips: results =>
         dispatch({ type: "SET_CURRENT_TRIPS", payload: results }),
      setPlaceCard: placeCard =>
         dispatch({ type: "SET_PLACE_CARD", payload: placeCard }),
      setSelectedTrip: tripId =>
         dispatch({ type: "SET_SELECTED_TRIP", payload: tripId }),
   })
)(CurrentTripsContainer);
