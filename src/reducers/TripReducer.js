export const tripReducer = (state = {}, action) => {
   switch (action.type) {
      case "ADD_TRIP_FIELD":
         return { ...state, ...action.payload };
      default:
         return state;
   }
};
