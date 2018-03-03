# yandex-pictures

> yandex-pictures - library for pulling Ynadex images 


### Why?
since Yandex does not have an API to get public images (03.03.2018), yesterday morning I was once again convinced that it does not exist, or rather it is, but only "on paper" [Yandex pictures api](https://yandex.ru/legal/pictures_api/)  , I decided to develop it on the basis of the internal API Yandex images.

### Get started

to begin, install the package ```yandex-pictures```

```sh
$ npm install yandex-pictures -s
```

### Examples 

connect the module
```sh
const yapic = require("yandex-pictures")
```

and so to begin the desired object with the search parameters of the picture

### object

required parameter

| options | types | info |
| ------ | ------ | ------ |
| text | string | search for string|
| url | string | search for a similar picture |

optional parameter

| options | types | default | info |
| ------ | ------ | ------ | ------ |
| isize | string | [large, medium, small, eq, wallpaper, eq] | used to search for images of a certain size " eq "used with" iw " and " ih" |
| iw | int | * | is used to search for images of a certain size in the case when i size the "eq" |
| ih | int | * | is used to search for images of a certain size in the case when i size the "eq" |
| iorient | string | [square, horizontal, vertical] | used to search for an image of a specific orientation |
| type | string | [photo, clipart, lineart, face, demotivator] | used to search for a certain type of picture |
| icolor | string | [orange, color, gray, red, orange, yellow, cyan, green, blue] | used to search for color pictures |
| itype | string | [png, jpg, jpeg, gif] | is used to search for images of a specific file type |
| page | int | 0 | shift the search page |
| count | int | 30 | the maximum number of images to return |
| comm | int | [*, 1] | is used to search for pictures of product |
| recent | string | [*, D7] | used to find a more recent picture |
| wp | string | [*, wh16x9_1366x768] | is used to search images for your desktop |
| site | string | * | used to search for images on the specified site |

### the object is used in the following functions

_asynchronous function_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({
    
    text: "JSusDev",
	count: 2

}, (err, res) => {

    console.log(res)

}) 
```

_synchronous function_
```sh
const yapic = require("yandex-pictures")

const images = yapic.getImageSync({

	text: "JSusDev",
	count: 2

})

console.log(images)
```

> for these functions, you can pass an optional header parameter and other crap

_asynchronous function_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({
    
    text: "JSusDev",
	count: 2

}, {/* ... options request from lib 'request' ... */}, (err, res) => {

    console.log(res)

}) 
```

_synchronous function_
```sh
const yapic = require("yandex-pictures")

const images = yapic.getImageSync({

	text: "JSusDev",
	count: 2

}, {/* ... options request from lib 'sync-request' ... */})

console.log(images)
```

#### a few more examples

_asynchronous search function for similar images_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({

    url: "https://static1.tgstat.com/public/images/channels/_0/82/822ecac8ab696703149dc7bb7ce2474d.jpg"

}, (err, res) => {

	console.log(res)

})

```

_asynchronous function text search with other parameters_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({

    text: "гражданская оборона",
    icolor: "gray",
    isize: "eq",
    iw: 800,
    ih: 600,
    count: 3

}, (err, res) => {

	console.log(res)

})

```

### Contacts 

my telegram: @JSusDev, channel https://t.me/Jsusdevs

if you have any questions and suggestions please email me in telegram if you find bugs I will be very grateful if you also let me know

##### yandex-pictures by JSus

