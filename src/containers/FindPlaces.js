import React from "react";
import { connect } from "react-redux";
import CategoryTag from "../components/CategoryTag";

class FindPlaces extends React.Component {
   render() {
      return (
         <div className="create-form">
            <div>filter tags</div>
            <div>
               <CategoryTag />
            </div>
         </div>
      );
   }
}

export default connect(state => ({ ...state }))(FindPlaces);
