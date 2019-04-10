const createUrl 	= require('./../utils/create-url')
	, parseImage 	= require('./../utils/parse-image')
	, request 		= require('./../utils/request')

const defailt_headers = {
	'x-requested-with': 'XMLHttpRequest'
}

module.exports = async function () {

	let search_obj 		= arguments[0] || {}
	  , option_request 	= arguments.length > 1 
							? typeof(arguments[1]) == 'object' 
								? arguments[1]
								: defailt_headers 
							: defailt_headers
	  , callback 		= arguments.length == 3 
	  						? arguments[2] 
	  						: typeof(arguments[1]) == 'function'
	  							? arguments[1]
	  							: null
	  , request_obj 	= {}
	  , count = (search_obj.count && 
	  			 search_obj.count < 30 
	  			 	? search_obj.count 
	  			 	: 30)

	option_request && (request_obj = {
						...request_obj, 
						...option_request
					});

	const body = await request.async ({
		...request_obj,
		url: createUrl (
				search_obj
			 )
	})


	const images = parseImage (body)
						.filter ((elem, index) => 
					   		index < count
					    )	

	callback && callback(images)

	return images
}