import React from "react";

export default class CityPlaceholder extends React.Component {
   handleSelectCity = city => {
      this.props.setCity(city);
   };
   render() {
      return (
         <div
            onClick={() => this.handleSelectCity(this.props.id)}
            className="city-placeholder"
         >
            <img src={this.props.images[0].sizes.medium.url} />
            <div>
               <h2>{this.props.name}</h2>
               {this.props.countryId}
            </div>
         </div>
      );
   }
}
