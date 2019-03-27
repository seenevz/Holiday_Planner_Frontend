import React from "react";
import defaultImg from "../default.jpg";

export default class Modal extends React.Component {
   render() {
      console.log("modal props", this.props);
      return (
         <div onClick={() => this.props.onClear()} className="modal-screen">
            <div className="modal-container">
               <div className="modal-content">
                  <div>
                     <h2>{this.props.placeCard.name}</h2>
                     <p>{this.props.placeCard.intro}</p>
                  </div>
                  <div>
                     <button
                        onClick={() =>
                           this.props.onSelect(this.props.placeCard)
                        }
                     >
                        Select this place
                     </button>
                  </div>
               </div>
               <div className="modal-map">
                  <img
                     src={
                        this.props.placeCard.images[0]
                           ? this.props.placeCard.images[0].sizes.medium.url
                           : defaultImg
                     }
                  />
               </div>
            </div>
         </div>
      );
   }
}
