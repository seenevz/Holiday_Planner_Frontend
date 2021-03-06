import React from "react";
import PlaceCard from "../components/PlaceCard";

class CurrentTrips extends React.Component {
   render() {
      const renderTrips = this.props.trips.map(trip => {
         return (
            <PlaceCard
               key={trip.id}
               name={trip.title}
               id={trip.id}
               setPlaceCard={this.props.setSelectedTrip}
            />
         );
      });
      return <div className="current-trips">{renderTrips}</div>;
   }
}

export default CurrentTrips;
