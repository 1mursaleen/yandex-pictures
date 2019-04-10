const requestSync 	= require('sync-request')
	, _request 		= require('request')


const async_request = (data) => 
		new Promise ((resolve, reject) => 
			_request (data, (err, res, body) => {
				if (err) {
					reject (err);
				} 

				resolve (body);
			})
		) 


const sync_request = (url, optionRequest) => 
	requestSync ('GET', url, optionRequest).getBody ().toString ()

module.exports = {
	sync: sync_request,
	async: async_request
}