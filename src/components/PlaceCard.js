import React from "react";
import defaultImg from "../default.jpg";

class PlaceCard extends React.Component {
   static defaultProps = {
      images: [{ sizes: { medium: { url: defaultImg } } }],
   };

   render() {
      return (
         <div className="place-card">
            <div>{this.props.name}</div>
            <img
               src={
                  this.props.images[0]
                     ? this.props.images[0].sizes.medium.url
                     : defaultImg
               }
            />
         </div>
      );
   }
}

export default PlaceCard;
