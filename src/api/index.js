import request from './request'

class API {
	
	getXxx = () => {
		return request.get('/xxx')
	}
}

export default new API;