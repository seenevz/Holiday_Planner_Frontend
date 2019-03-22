import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";
import FindCity from "../components/FindCity";

class CreateTripContainer extends React.Component {
   state = {
      country: "",
      city: "",
      mood: "",
      numberPeople: "",
      beginDate: "",
      endDate: "",
   };

   handleChangeInput = event => {
      this.setState({ [event.target.name]: event.target.value });
   };
   render() {
      return (
         <>
            {this.state.city ? (
               <CreateTripForm
                  {...this.state}
                  handleChangeInput={this.handleChangeInput}
               />
            ) : (
               <FindCity />
            )}
            <div className="places-container">
               <PlacesPickerContainer />
               <PlacesSelectedContainer />
            </div>
         </>
      );
   }
}

export default connect(null)(CreateTripContainer);
