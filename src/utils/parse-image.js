module.exports = (body) => {
	try {
		const urls = body.match (/img_url=http[^;]+/g)
		      			.map (elem => 
		      				elem
		      					.replace ('%3A', ':')
		      					.replace (/(&amp|img_url=)/g, '')
		      			);
		 
		return urls;
	} catch (e) {
		return ['error parse image'];
	}
}
