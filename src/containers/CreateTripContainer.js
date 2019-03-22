import React from "react";
import CreateTripForm from "../components/CreateTripForm";
import { connect } from "react-redux";
import PlacesPickerContainer from "./PlacesPickerContainer";

class CreateTripContainer extends React.Component {
   state = {
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
            <PlacesPickerContainer />
            <CreateTripForm
               {...this.state}
               handleChangeInput={this.handleChangeInput}
            />
         </>
      );
   }
}

export default connect(null)(CreateTripContainer);
