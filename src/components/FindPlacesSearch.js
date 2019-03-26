import React from "react";
import CategoryTag from "./CategoryTag";

export default class FindPlacesSearch extends React.Component {
   render() {
      const renderTags = this.props.tags.map(tag => (
         <CategoryTag key={tag.label} {...tag} />
      ));
      return (
         <>
            <div style={{ display: "flex", placeContent: "center" }}>
               {renderTags}
            </div>
            <button
               style={{ gridRow: "2 / 3" }}
               onClick={() => this.props.fetchPlaces()}
            >
               Search Places
            </button>
         </>
      );
   }
}
