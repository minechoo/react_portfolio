import { combineReducers } from 'redux';
import * as types from './actionType';

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		//컴포넌트로부터  넘겨받는 action객체
		//해당 객체를 넘겨받으면 saga가 해당 타입에 대한 비동기 데이터처리하고 새로운객체 반환
		case types.YOUTUBE.start:
			return state;

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.fail:
			return { ...state, youtube: action.payload };

		default:
			return state;
	}
};

const departmentReducer = (state = { department: [] }, action) => {
	switch (action.type) {
		case types.DEPARTMENT.start:
			return state;
		case types.DEPARTMENT.success:
			return { ...state, department: action.payload };
		case types.DEPARTMENT.fail:
			return { ...state, department: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return state;
		case types.FLICKR.success:
			return { ...state, flickr: action.payload };
		case types.FLICKR.fail:
			return { ...state, flickr: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({ youtubeReducer, departmentReducer, flickrReducer });
export default reducers;
