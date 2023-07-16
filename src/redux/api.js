import axios from 'axios';

export const fetchYoutube = async () => {
	const key = 'AIzaSyANMdnk7q2cBX8tqGJZXpVFH9bGJMOwmEc'; //api 키
	const list = 'PLMafzyXZ12TPBYgeplFEdJeSMcJvb3v5u'; //class 브라우저 상단값
	const num = 8;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

	return await axios.get(url);
};

export const fetchDepartment = async () => {
	return await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
};
