import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";
import FindCity from "./FindCity";
import FindPlaces from "./FindPlaces";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";

const SAVE_MUTATION = gql`
   mutation createTrip(
      $title: String!
      $mood: String!
      $numberPeople: String!
      $beginDate: String!
      $endDate: String!
   ) {
      createTrip(
         fields: {
            title: $title
            mood: $mood
            numberPeople: $numberPeople
            beginDate: $beginDate
            endDate: $endDate
         }
      ) {
         id
      }
   }
`;

const SAVE_PLACES_MUTATION = gql`
   mutation createPlace($name: String!, $placeId: String!, $tripId: String!) {
      createPlace(name: $name, placeId: $placeId, tripId: $tripId) {
         id
      }
   }
`;

class CreateTripContainer extends React.Component {
   runPlaceMutation = async (place, trip) => {
      const obj = { placeId: place.id, name: place.name, tripId: trip.id };
      await this.props.client.mutate({
         mutation: SAVE_PLACES_MUTATION,
         variables: { ...obj },
      });
   };

   handleChangeInput = event => {
      this.props.setCityField({ [event.target.name]: event.target.value });
   };
   handleChangeForm = event => {
      this.props.setTripContent({ [event.target.name]: event.target.value });
   };
   handleSaveButton = async event => {
      event.preventDefault();
      console.log(this.props.trip);
      try {
         const trip = await this.props.client.mutate({
            mutation: SAVE_MUTATION,
            variables: { ...this.props.trip },
         });
         await this.props.trip.places.map(place =>
            this.runPlaceMutation(place, trip.data.createTrip)
         );

         await this.props.fetchTrips();
         this.props.setSection("");
      } catch (error) {
         console.warn(error);
      }
   };
   render() {
      return (
         <div className="create-trip-container">
            <div className="create-trip-sidebar">
               <div style={{ display: "grid" }}>
                  {this.props.trip.city ? (
                     <>
                        {this.props.app.showSave ? (
                           <CreateTripForm
                              handleChangeInput={this.handleChangeForm}
                              handleSaveButton={this.handleSaveButton}
                              toggleShowSave={this.props.toggleShowSave}
                           />
                        ) : (
                           <FindPlaces setResults={this.props.setResults} />
                        )}
                     </>
                  ) : (
                     <FindCity
                        results={this.props.app.results}
                        city={this.props.app.searchTerm}
                        setResults={this.props.setResults}
                        handleChangeInput={this.handleChangeInput}
                     />
                  )}
               </div>
               <div>
                  {!this.props.app.showSave ? (
                     this.props.trip.city ? (
                        <button onClick={this.props.toggleShowSave}>
                           Continue
                        </button>
                     ) : (
                        ""
                     )
                  ) : (
                     ""
                  )}
               </div>
            </div>
            <div className="create-trip-places-container">
               <div style={{ height: "100%" }}>{this.props.trip.city}</div>
               <div className="selection-container">
                  <PlacesSelectedContainer />
                  <PlacesPickerContainer />
               </div>
            </div>
         </div>
      );
   }
}

export default withApollo(
   connect(
      state => ({
         ...state,
      }),
      dispatch => ({
         setCityField: field =>
            dispatch({ type: "SET_SEARCHTERM", payload: field.search }),
         setResults: results =>
            dispatch({ type: "SET_RESULTS", payload: results }),
         toggleShowSave: () => dispatch({ type: "TOGGLE_SHOW_SAVE" }),
         setTripContent: field =>
            dispatch({ type: "ADD_TRIP_FIELD", payload: field }),
         setSection: section =>
            dispatch({ type: "SET_SECTION", payload: section }),
         setTrips: results =>
            dispatch({ type: "SET_CURRENT_TRIPS", payload: results }),
      })
   )(CreateTripContainer)
);
