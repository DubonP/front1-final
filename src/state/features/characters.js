import { createSlice } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
    name: "cart",
    initialState: {
      isLoading: false,
      search: '',
      availableCharacters: [],
      selectedCharacters: [],
      isFavorito: false,
      favoriteCharacters: [],
    },
    reducers: {
      isFavorito: (state, action) => {
        state.isFavorito = action.payload;
      },
      addCharacters: (state, action) => {
        state.selectedCharacters = [...state.selectedCharacters, (action.payload || [])];
      },
      removeCharacters: (state, action) => {
        state.selectedCharacters = state.selectedCharacters.filter(item => item !== action.payload);
      },
      setAvailableCharacters: (state, action) => {
        state.availableCharacters = action.payload;
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
      setSearch(state, action) {
        state.search = action.payload;
      },
      setFavoriteCharacters(state, action) {
        state.favoriteCharacters = action.payload;
      }
    }
  });

// Selectors
export const isLoadingSelector = (state) => state.cart.isLoading;
export const searchSelector = (state) => state.cart.search;
export const availableCharactersSelector = (state) => state.cart.availableCharacters;
export const selectedCharactersSelector = (state) => state.cart.selectedCharacters;
export const isFavoritoSelector = (state) => state.cart.isFavorito;
export const favoriteCharactersSelector = (state) => state.cart.favoriteCharacters;

// Actions
export const fetchAvailableCharacters = () => ({ type: "cart/fetchAvailableCharacters" });
export const addCharacters = (character) => ({ type: "cart/addCharacters", payload: character });
export const removeCharacters = (id) => ({ type: "cart/removeCharacters", payload: id });
export const setAvailableCharacters = (characters) => ({ type: "cart/setAvailableCharacters", payload: characters });
export const setIsLoading = (isLoading) => ({ type: "cart/setIsLoading", payload: isLoading });
export const setSearch = (search) => ({ type: "cart/setSearch", payload: search });
export const setIsFavorito = (isFavorito) => ({ type: "cart/isFavorito", payload: isFavorito });
export const getFavCharacter = () => ({ type: "cart/getFavCharacter" });
export const setFavoriteCharacters = (favoriteCharacters) => ({ type: "cart/setFavoriteCharacters", payload: favoriteCharacters });

// Reducer
export default slice.reducer;