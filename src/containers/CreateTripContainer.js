import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";
import FindCity from "./FindCity";
import FindPlaces from "./FindPlaces";

class CreateTripContainer extends React.Component {
   handleChangeInput = event => {
      this.props.setTripField({ [event.target.name]: event.target.value });
   };
   render() {
      return (
         <div className="create-trip-container">
            <div className="create-trip-sidebar">
               {this.props.trip.city ? (
                  // <CreateTripForm
                  //    {...this.props}
                  //    handleChangeInput={this.handleChangeInput}
                  // />
                  <>
                     <FindPlaces setResults={this.props.setResults} />
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
            <div className="create-trip-places-container">
               <div style={{ height: "100%" }}>{this.props.trip.city}</div>
               <div className="selection-container">
                  <PlacesPickerContainer />
                  <PlacesSelectedContainer />
               </div>
            </div>
         </div>
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
