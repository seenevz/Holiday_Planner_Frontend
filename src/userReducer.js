export const userReducer = (state = { user: "" }, action) => {
   switch (action.type) {
      case "ADD_USER":
         return { user: action.user };
      default:
         return state;
   }
};
