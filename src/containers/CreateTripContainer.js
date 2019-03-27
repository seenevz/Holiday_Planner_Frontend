import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";
import FindCity from "./FindCity";
import FindPlaces from "./FindPlaces";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";

SAVE_MUTATION = gql``;

class CreateTripContainer extends React.Component {
   handleChangeInput = event => {
      this.props.setTripField({ [event.target.name]: event.target.value });
   };
   handleSaveButton = () => {};
   render() {
      return (
         <div className="create-trip-container">
            <div className="create-trip-sidebar">
               <div style={{ display: "grid" }}>
                  {this.props.trip.city ? (
                     <>
                        {this.props.app.showSave ? (
                           <CreateTripForm
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
         setTripField: field =>
            dispatch({ type: "SET_SEARCHTERM", payload: field.search }),
         setResults: results =>
            dispatch({ type: "SET_RESULTS", payload: results }),
         toggleShowSave: () => dispatch({ type: "TOGGLE_SHOW_SAVE" }),
      })
   )(CreateTripContainer)
);
