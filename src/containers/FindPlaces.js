import React from "react";
import { connect } from "react-redux";
import CategoryTag from "../components/CategoryTag";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import FindPlacesSearch from "../components/FindPlacesSearch";

const TAGS_QUERY = gql`
   query tags($city: String!) {
      tags(city: $city) {
         name
         label
         type
      }
   }
`;

class FindPlaces extends React.Component {
   fetchTags = async city => {
      const result = await this.props.client.query({
         query: TAGS_QUERY,
         variables: { city },
      });
      const tags = result.data.tags;
      this.props.setResults(tags);
   };

   handleTagFilter = event => {
      const term = event.target.value;

      this.props.setTagFilter(term);
   };

   componentDidMount() {
      this.fetchTags(this.props.trip.city);
   }

   render() {
      const filteredResults = this.props.app.results.filter(tag =>
         tag.name.toLowerCase().includes(this.props.app.tagFilter.toLowerCase())
      );

      const renderTags = filteredResults.map(tag => (
         <CategoryTag key={tag.label} setTag={this.props.setTag} {...tag} />
      ));
      return (
         <div className="select-place-tags">
            <div>
               <input
                  placeholder="Filter tags"
                  onChange={this.handleTagFilter}
               />
            </div>
            <div className="tags-container">{renderTags}</div>
            <div className="tags-search">
               <FindPlacesSearch tags={this.props.app.tags} />
            </div>
         </div>
      );
   }
}

export default withApollo(
   connect(
      state => ({ ...state }),
      dispatch => ({
         setTag: tag => dispatch({ type: "SET_TAG", payload: tag }),
         setTagFilter: term =>
            dispatch({
               type: "SET_TAG_FILTER",
               payload: term,
            }),
      })
   )(FindPlaces)
);
