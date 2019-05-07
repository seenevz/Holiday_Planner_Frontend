export const tripReducer = (state = { places: [], current: "" }, action) => {
   switch (action.type) {
      case "ADD_TRIP_FIELD":
         return { ...state, ...action.payload };
      case "ADD_PLACE_TO_SELECTION":
         return { ...state, places: [...state.places, action.payload] };
      case "SET_SELECTED_TRIP":
         return { ...state, current: action.payload };
      default:
         return state;
   }
};
