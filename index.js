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

const url = ({text, isize, iw, ih, iorient, type, icolor, itype, url, page, comm, recent, wp, site}) => {

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

    Url += '&format=json&request={"blocks":[{"block":"gallery__items:ajax","params":{},"version":2}],"bmt":{"lb":"*wA?D1KA}v-3?Puw=Pzy"},"amt":{"las":""}}'

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



	let Images = []

	const len = Math.ceil(obj.count / 30)



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

					parse = parse.filter((elem, index) => index < obj.count)
					
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

	for (let i = 0; i < Math.ceil(obj.count / 30); i++) {

		const Obj = {

			...obj,

			page: (obj.page != undefined ? (obj.page + i) : i)

		} 

		Images = [..._getImageSync(Obj, optionRequest), ...Images]

	}

	return Images.filter((elem, index) => index < obj.count)

} 



exports.getImage = getImage
//exports._getImage = _getImage

exports.getImageSync = getImageSync
//exports._getImageSync = _getImageSync