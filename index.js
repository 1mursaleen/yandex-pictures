const requestSync = require('sync-request'),
		  request = require('request')

const parseImage = (data) => {

	try {

		const Html = decodeURIComponent(JSON.parse(data.toString()).blocks[0].html),

		      Urls = Html.match(/img_url=http(\w|\:|\/|\.|\+|\(|\)|-|_|\?|=|\&|\*|\d|!|@|#|\^|\$|\%|a-zA-Z0-9А-Яа-я)+\&amp/gi)
		      			.map(elem => elem.replace(/(img_url=|\&amp)/gi, ""));

		return Urls

	} catch (e) {

		return []

	}

}

const url = ({text, isize, iw, ih, iorient, type, icolor, itype, url, page, comm, recent, wp, site, family}) => {

	let Url = "https://yandex.ru/images/search?"

    Url += text ? `text=${encodeURIComponent(text)}` : ""
    Url += url ? `url=${encodeURIComponent(url)}&rpt=imagelike` : ""
    Url += isize ? `&isize=${isize}` : ""
    Url += iw ? `&iw=${iw}` : ""
    Url += ih ? `&ih=${ih}` : ""
    Url += iorient ? `&iorient=${iorient}` : ""
    Url += type ? `&type=${type}` : ""
    Url += itype ? `&itype=${itype}` : ""
    Url += icolor ? `&icolor=${icolor}` : ""
    Url += page ? `&p=${page}` : ""
    Url += comm ? `&comm=${comm}` : ""
    Url += recent ? `&recent=${recent}` : ""
    Url += wp ? `&wp=${wp}` : ""
    Url += site ? `&site=${site}` : ""
    Url += family != undefined ? `&family=${family}` : ""

    Url += '&format=json&request={"blocks":[{"block":"gallery__items:ajax","params":{},"version":2}]}'

    return Url

}



const _getImage = function () {

	let obj, optionRequest, callback 

	if ( arguments.length == 3) {

		obj = arguments[0],
		optionRequest = arguments[1],
		callback = arguments[2]

	} else {

		obj = arguments[0],
		callback = arguments[1],
		optionRequest = {}

	}

	const Url = { 

		headers: {

			'Cookie':'ipnd=0;'
 
     	},

		...optionRequest,
	
		uri: url(obj)

	}

    request(Url, (error, response, body) => {
        
        callback(error, parseImage(body))

    })

}

const getImage = function () {

	let obj, optionRequest, callback

	if ( arguments.length == 3) {

		obj = arguments[0],
		optionRequest = arguments[1],
		callback = arguments[2]

	} else {

		obj = arguments[0],
		callback = arguments[1],
		optionRequest = {}

	}

	const count = (obj.count ? obj.count : 30)

	let Images = []

	const len = Math.ceil(count / 30)



	for (let i = 0; i < len; i++) {

		const Obj = {

			...obj,

			page: (obj.page != undefined ? (obj.page + i) : i)

		} 


		_getImage(Obj, optionRequest, (err, res) => {

			if (err) {

				callback(err, [])

				return 

			}

			Images[i] = res


			if (Images.length == len) {

				let check = 1

				for (let t = 0; t < Images.length; t++) {

					if (!Images[t]) {

						check = 0

					}

				}

				if (check) {

					let parse = []

					Images.map(elem => {

						parse = [...parse,...elem]

					})

					parse = parse.filter((elem, index) => index < count )
					
					callback(err, parse)

				}

			}

		})

	}

}




const _getImageSync = (obj, optionRequest) => {

	const endUrl = url(obj)

	const HtmlBody = requestSync('GET', endUrl, optionRequest).getBody()

	return parseImage(HtmlBody)

} 

const getImageSync = (obj, optionRequest) => {

	let Images = []

	const count = (obj.count ? obj.count : 30)

	let reqObj = {

		headers: {

			'Cookie':'ipnd=0;'
 
     	}

	}

	if (optionRequest) {

		reqObj = {

			...reqObj, 
			...optionRequest

		}

	}


	for (let i = 0; i < Math.ceil(count / 30); i++) {

		const Obj = {

			...obj,

			page: (obj.page != undefined ? (obj.page + i) : i)

		} 

		Images = [..._getImageSync(Obj, reqObj), ...Images]

	}

	return Images.filter((elem, index) => index < count )

} 



exports.getImage = getImage
//exports._getImage = _getImage

exports.getImageSync = getImageSync
//exports._getImageSync = _getImageSync