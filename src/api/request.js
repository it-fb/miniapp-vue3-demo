import { API_URL, CODE } from '@/constants'

function request({ url, method, data, header }) {
	url = API_URL + url;
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success: ({ data }) => {
				switch(data.code) {
					case CODE.ERROR:
						reject(data)
						break;
					default:
						resovle(data)
						break;
				}
			},
			fail: (err) => {
				reject(err)
				uni.showToast({
					icon: 'none',
					title: '网络错误!'
				})
			},
			complete: () => {
				// 比如一些 loading
			}
		})
	})
}

export default new class Request {
	get(url, params, header) {
		return request({
			url,
			method: 'GET',
			data: params,
			header
		})
	}
	
	post(url, data, header) {
		return request({
			url,
			method: 'POST',
			data: data,
			header
		})
	}
}