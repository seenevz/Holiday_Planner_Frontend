export const appReducer = (state = { section: "" }, action) => {
   switch (action.type) {
      case "SET_SECTION":
         return { ...state, section: action.section };
      default:
         return state;
   }
};
