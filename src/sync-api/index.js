const createUrl 	= require('./../utils/create-url')
	, parseImage 	= require('./../utils/parse-image')
	, request 		= require('./../utils/request')

module.exports = (search_obj, option_request) => {
	const count = (search_obj.count && search_obj.count < 30 ? search_obj.count : 30)

	let request_obj = {
		headers: {
			'x-requested-with': 'XMLHttpRequest'
     	}
	}

	option_request && (request_obj = {
						...request_obj, 
						...option_request
					})

	const body = request.sync (
					createUrl (
						search_obj
					),
					request_obj
				)

	const images = parseImage (body)

	return images.filter ((elem, index) => 
		   		index < count
		   )
} 