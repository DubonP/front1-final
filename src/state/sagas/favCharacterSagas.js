import { addCharacters, removeCharacters, setIsFavorito } from '../features/characters';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Saga
export function* addCharactersSaga(action) {
  try {
    yield put(addCharacters(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* removeCharactersSaga(action) {
  try {
    yield put(removeCharacters(action.payload));
  } catch (error) {
    console.log(error);
  }
}

// Watcher Saga
export default function* favCharacterSagas() {
  yield takeEvery('favCharacter/addCharacters', addCharactersSaga);
  yield takeEvery('favCharacter/removeCharacters', removeCharactersSaga);
}

