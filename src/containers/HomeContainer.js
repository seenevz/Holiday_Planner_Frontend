import React from "react";
import { connect } from "react-redux";
import CreateTripContainer from "./CreateTripContainer";

import "../style/home.css";

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
      return (
         <div className="home">
            <CreateTripContainer />
         </div>
      );
   }
}

export default connect(state => ({ user: state.user }))(HomeContainer);
