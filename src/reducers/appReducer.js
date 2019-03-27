const setTag = (state, term) => {
   const currentTags = state.tags;
   let setTags = [];

   !!currentTags.find(tag => tag.name === term.name)
      ? (setTags = currentTags.filter(tag => tag.name !== term.name))
      : (setTags = [...currentTags, term]);

   return { ...state, tags: setTags };
};

const setPlaceCard = (state, card) => {
   const stateCard = state.placeCard;

   return stateCard === card
      ? { ...state, placeCard: "" }
      : { ...state, placeCard: card };
};

export const appReducer = (
   state = {
      section: "",
      results: [],
      tags: [],
      tagFilter: "",
      placesResults: [],
      placeCard: "",
      showSave: false,
   },
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
      case "SET_PLACES_RESULTS":
         return { ...state, placesResults: action.payload };
      case "SET_PLACE_CARD":
         return setPlaceCard(state, action.payload);
      case "CLEAR_PLACE_CARD":
         return { ...state, placeCard: "" };
      case "TOGGLE_SHOW_SAVE":
         return { ...state, showSave: !state.showsave };
      default:
         return state;
   }
};
