import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";
import FindCity from "../components/FindCity";

class CreateTripContainer extends React.Component {
   handleChangeInput = event => {
      this.props.setTripField({ [event.target.name]: event.target.value });
   };
   render() {
      return (
         <>
            {this.props.trip.city ? (
               <CreateTripForm
                  {...this.props}
                  handleChangeInput={this.handleChangeInput}
               />
            ) : (
               <FindCity
                  results={this.props.app.results}
                  city={this.props.app.searchTerm}
                  setResults={this.props.setResults}
                  handleChangeInput={this.handleChangeInput}
               />
            )}
            <div className="places-container">
               <PlacesPickerContainer />
               <PlacesSelectedContainer />
            </div>
         </>
      );
   }
}

export default connect(
   state => ({
      ...state,
   }),
   dispatch => ({
      setTripField: field =>
         dispatch({ type: "SET_SEARCHTERM", payload: field.search }),
      setResults: results =>
         dispatch({ type: "SET_RESULTS", payload: results }),
   })
)(CreateTripContainer);
