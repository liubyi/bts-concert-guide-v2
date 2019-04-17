import axios from 'axios';

const KEY = 'FkaoBIra8DaaqJzneMnnAsj9IwSgaDjr9WJFIb22';


export default axios.create({
	baseURL: 'https://api.uber.com/v1.2',
	params: {},
	headers: { 'Authorization' : 'Token '+ KEY }
});

