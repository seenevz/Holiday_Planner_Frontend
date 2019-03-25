export const appReducer = (state = { section: "", results: [] }, action) => {
   switch (action.type) {
      case "SET_SECTION":
         return { ...state, section: action.payload };
      case "SET_SEARCHTERM":
         return { ...state, searchTerm: action.payload };
      case "SET_RESULTS":
         return { ...state, results: action.payload };
      default:
         return state;
   }
};
