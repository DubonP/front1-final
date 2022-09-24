import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  setAvailableCharacters,
  setIsLoading,
  searchSelector,
} from "../features/characters";

export function* fetchAvailableCharacters() {
  yield put(setIsLoading(true));
  const search = yield select(searchSelector);
  let url = "https://rickandmortyapi.com/api/character";
  if (search) {
    url = `${url}?name=${search}`;
  }
  const response = yield call(fetch, url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    alert("Failed to fetch characters");
    yield put(setIsLoading(false));
  }
  else {
  const data = yield response.json();
  yield put(setAvailableCharacters(data.results));
  yield put(setIsLoading(false));
  }
}

export default function* charactersSagas() {
  yield takeLatest("cart/fetchAvailableCharacters", fetchAvailableCharacters);
}
