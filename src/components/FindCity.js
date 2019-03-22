import React from "react";
import CityPlaceholder from "./CityPlaceholder";

class FindCity extends React.Component {
   render() {
      return (
         <div className="create-form">
            <form>
               <label for="city-search">Search for a city</label>
               <input id="city-search" />
               <button type="submit">Search</button>
            </form>
            <div className="city-container">
               <CityPlaceholder />
            </div>
         </div>
      );
   }
}

export default FindCity;
