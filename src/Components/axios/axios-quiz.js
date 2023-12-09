import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-project-n1.firebaseio.com/'
})