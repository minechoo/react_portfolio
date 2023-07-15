import { takeLatest, put, call, fork, all } from 'redux-saga/effects';
import { fetchYoutube } from './api';
import * as types from './actionType';

function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

//유튜브 데이터 호출한뒤 반환된 값으로 새롭게 액션객체를 생성하는 함수
function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.fail, payload: err });
	}
}

//최종적으로 fork를 통해 callYoutube호출 함수 제작
export default function* rootSaga() {
	yield all([fork(callYoutube)]);
}
