import React from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";

import CreateTripContainer from "./CreateTripContainer";

import "../style/home.css";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import CurrentTripsContainer from "./CurrentTripsContainer";

const TRIPS_QUERY = gql`
   query trips {
      allUserTrips {
         id
         title
      }
   }
`;

class HomeContainer extends React.Component {
   fetchTrips = async () => {
      const result = await this.props.client.query({
         query: TRIPS_QUERY,
      });
      const trips = result.data.allUserTrips;
      this.props.setTrips(trips);
   };

   componentDidMount() {
      const { history, user } = this.props;
      this.props.setSection("");

      if (!user.firstName) {
         history.push("/");
      }
   }

   render() {
      const app = this.props.app;
      const card = this.props.app.placesResults.find(
         place => place.id === app.placeCard
      );
      return (
         <>
            {app.placeCard ? (
               <Modal
                  placeCard={card}
                  onSelect={this.props.addPlaceToSelection}
                  onClear={this.props.clearPlaceCard}
               />
            ) : (
               ""
            )}
            <NavBar />
            <div className="home">
               {this.props.app.section === "createTrip" ? (
                  <CreateTripContainer
                     fetchTrips={this.fetchTrips}
                     history={this.props.history}
                  />
               ) : (
                  <CurrentTripsContainer fetchTrips={this.fetchTrips} />
               )}
            </div>
         </>
      );
   }
}

export default withApollo(
   connect(
      state => ({ user: state.user, app: state.app }),
      dispatch => ({
         clearPlaceCard: () => dispatch({ type: "CLEAR_PLACE_CARD" }),
         addPlaceToSelection: place =>
            dispatch({ type: "ADD_PLACE_TO_SELECTION", payload: place }),
         setTrips: results =>
            dispatch({ type: "SET_CURRENT_TRIPS", payload: results }),
         setSection: section =>
            dispatch({ type: "SET_SECTION", payload: section }),
      })
   )(HomeContainer)
);
