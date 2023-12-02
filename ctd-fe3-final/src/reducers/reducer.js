const reducer = (state, action) => {
    switch (action.type) {
      case 'GET_DENTISTS':
        return { ...state, list: action.payload };
      case 'ADD_FAV':
        const existingIndex = state.favs.findIndex(fav => fav.id === action.payload.id);
        if (existingIndex === -1) {
          return { ...state, favs: [...state.favs, action.payload] };
        }
        return state;
      case 'DELETE_FAV':
        const filteredFavs = state.favs.filter(fav => fav.id !== action.payload.id);
        return { ...state, favs: filteredFavs };
      case 'CHANGE_THEME':
        return { ...state, theme: !state.theme };
      default:
        return state;
    }
  };
  
  export default reducer;
  