import React from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";

const TRIP_QUERY = gql`
   query trip($tripId: Strig!) {
      trip(tripId: $tripId) {
         title
         places {
            id
         }
      }
   }
`;
class CurrentTripAllPlaces extends React.Component {
   render() {
      return <div>Current Trip Name:{this.props.trip.name} </div>;
   }
}

export default connect(state => ({ ...state }))(CurrentTripAllPlaces);
