import React from "react";
import CityPlaceholder from "./CityPlaceholder";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import { connect } from "react-redux";

const FIND_CITY = gql`
   query city($term: String!) {
      city(term: $term) {
         id
         name
         score
         snippet
         countryId
         images {
            sizes {
               medium {
                  url
               }
            }
         }
      }
   }
`;

class FindCity extends React.Component {
   searchCity = async event => {
      event.preventDefault();
      const city = this.props.city;

      const result = await this.props.client.query({
         query: FIND_CITY,
         variables: { term: city },
      });
      const cityResults = result.data.city;
      this.props.setResults(cityResults);
   };

   render() {
      const renderCities = this.props.results.map(result => (
         <CityPlaceholder
            key={result.id}
            setCity={this.props.setCity}
            {...result}
         />
      ));

      return (
         <div className="create-form">
            <form onSubmit={this.searchCity}>
               <label htmlFor="city-search">Search for a city</label>
               <input
                  onChange={this.props.handleChangeInput}
                  id="city-search"
                  name="search"
               />
               <button type="submit">Search</button>
            </form>
            <div className="city-container">{renderCities}</div>
         </div>
      );
   }
}

export default withApollo(
   connect(
      null,
      dispatch => ({
         setCity: city =>
            dispatch({ type: "ADD_TRIP_FIELD", payload: { city } }),
      })
   )(FindCity)
);
