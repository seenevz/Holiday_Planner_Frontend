const user = { firstName: "Sergio" };

export const userReducer = (state = { firstName: user.firstName }, action) => {
   switch (action.type) {
      case "ADD_USER":
         return { ...action.user };
      case "CLEAR_USER":
         return {};
      default:
         return state;
   }
};
