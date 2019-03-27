import React from "react";
import { connect } from "react-redux";
import CreateTripContainer from "./CreateTripContainer";

import "../style/home.css";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

class HomeContainer extends React.Component {
   state = {
      createTrip: true,
   };

   componentDidMount() {
      const { history, user } = this.props;

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
               <CreateTripContainer />
            </div>
         </>
      );
   }
}

export default connect(
   state => ({ user: state.user, app: state.app }),
   dispatch => ({
      clearPlaceCard: () => dispatch({ type: "CLEAR_PLACE_CARD" }),
      addPlaceToSelection: place =>
         dispatch({ type: "ADD_PLACE_TO_SELECTION", payload: place }),
   })
)(HomeContainer);
