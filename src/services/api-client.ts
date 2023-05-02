import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ff57b2a7f5a44936927c1f314141a325',
	},
});
