import { all } from 'redux-saga/effects';
import charactersSagas from './sagas/charactersSagas';
import favCharacterSagas from './sagas/favCharacterSagas';

export default function* rootSagas() {
    yield all([
        charactersSagas(),
        favCharacterSagas()
    ]);
}