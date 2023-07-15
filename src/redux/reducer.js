import { combineReducers } from 'redux';

const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			//기존 state를 action.payload로 덮어쓰기
			return { ...state, youtube: action.payload };

		default:
			return state;
	}
};

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case 'SET_GALLERY':
			//기존 state를 action.payload로 덮어쓰기
			return { ...state, gallery: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({ memberReducer, youtubeReducer, galleryReducer });

export default reducers;
