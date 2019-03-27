export const tripReducer = (state = { places: [] }, action) => {
   switch (action.type) {
      case "ADD_TRIP_FIELD":
         return { ...state, ...action.payload };
      case "ADD_PLACE_TO_SELECTION":
         return { ...state, places: [...state.places, action.payload] };
      default:
         return state;
   }
};
