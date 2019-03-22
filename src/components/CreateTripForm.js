import React from "react";

export default class CreateTripForm extends React.Component {
   render() {
      const { city, mood, numberPeople, beginDate, endDate } = this.props;

      return (
         <form className="create-form">
            <label htmlFor="city">Where to</label>
            <input
               id="city"
               name="city"
               value={city}
               onChange={this.props.handleChangeInput}
            />
            <label htmlFor="mood">Mood</label>
            <input
               id="mood"
               name="mood"
               value={mood}
               onChange={this.props.handleChangeInput}
            />
            <label htmlFor="numberPeople">Num. of people</label>
            <input
               id="numberPeople"
               name="numberPeople"
               value={numberPeople}
               onChange={this.props.handleChangeInput}
            />
            <label htmlFor="beginDate">From</label>
            <input
               id="beginDate"
               name="beginDate"
               value={beginDate}
               onChange={this.props.handleChangeInput}
            />
            <label htmlFor="endDate">Until</label>
            <input
               id="endDate"
               name="endDate"
               value={endDate}
               onChange={this.props.handleChangeInput}
            />
            <div>
               <button type="submit">Search</button>
            </div>
         </form>
      );
   }
}
