import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";
import PlacesSelectedContainer from "./PlacesSelectedContainer";

class CreateTripContainer extends React.Component {
   state = {
      country: "",
      city: "",
      mood: "",
      numberPeople: "",
      beginDate: "",
      endDate: "",
   };

   componentDidMount;

   handleChangeInput = event => {
      this.setState({ [event.target.name]: event.target.value });
   };
   render() {
      return (
         <>
            <CreateTripForm
               {...this.state}
               handleChangeInput={this.handleChangeInput}
            />
            <div className="places-container">
               <PlacesPickerContainer />
               <PlacesSelectedContainer />
            </div>
         </>
      );
   }
}

export default connect(null)(CreateTripContainer);
