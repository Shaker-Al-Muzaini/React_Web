import axios from 'axios';
class RestApp{

	static GetRequest=(getUrl)=>{
		return axios.get(getUrl).then(response=>{
			return response.data;
		}).catch(error=>{
			return 'null'
		});
	}

	static PostRequest=(postUrl,postJson)=>{
		let config={
			headers:{
				'content-Type':'application/json'
			}
		}

		return axios.post(postUrl,postJson,config).then(response=>{
			return response.data;
		}).catch(error=>{
			return 'null'
		});

	}

}

export default RestApp 