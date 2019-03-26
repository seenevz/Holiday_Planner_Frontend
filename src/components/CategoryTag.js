import React from "react";

class CategoryTag extends React.Component {
   render() {
      return (
         <div className="tag" onClick={() => this.props.setTag(this.props)}>
            {this.props.name}
         </div>
      );
   }
}

export default CategoryTag;
