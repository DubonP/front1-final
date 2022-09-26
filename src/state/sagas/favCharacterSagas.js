import {
  selectedCharactersSelector,
  setFavoriteCharacters,
} from "../features/characters";
import { put, takeLatest, call, select } from "redux-saga/effects";

export function* getFavCharacter() {
  const selectedCharacters = yield select(selectedCharactersSelector);
  if (selectedCharacters.length > 1) {
    const response = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character/${selectedCharacters}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = yield response.json();
    yield put(setFavoriteCharacters(data));
  } else if (selectedCharacters.length === 1) {
    const response = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character/${selectedCharacters}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = yield response.json();
    yield put(setFavoriteCharacters([data]));
  }
}

// Watcher Saga
export default function* favCharacterSagas() {
  yield takeLatest("cart/getFavCharacter", getFavCharacter);
}
