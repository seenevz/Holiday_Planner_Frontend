const setTag = (state, term) => {
   const currentTags = state.tags;
   let setTags = [];

   !!currentTags.find(tag => tag.name === term.name)
      ? (setTags = currentTags.filter(tag => tag.name !== term.name))
      : (setTags = [...currentTags, term]);

   return { ...state, tags: setTags };
};

export const appReducer = (
   state = { section: "", results: [], tags: [], tagFilter: "" },
   action
) => {
   console.log("State:", action);
   switch (action.type) {
      case "SET_SECTION":
         return { ...state, section: action.payload };
      case "SET_SEARCHTERM":
         return { ...state, searchTerm: action.payload };
      case "SET_RESULTS":
         return { ...state, results: action.payload };
      case "SET_TAG":
         return setTag(state, action.payload);
      case "SET_TAG_FILTER":
         return { ...state, tagFilter: action.payload };
      default:
         return state;
   }
};
