![enter image description here](https://www.wilmerhale.com/uploadedImages/Shared_Content/Images/Homepage/yandex_highlight_slider.jpg)

##### lang: [ru](#rulang) [en](#enlang)


# <a name="rulang">yandex-pictures</a>

> yandex-pictures - Оболочка внутреннего программного интерфейса Yandex Image

### Почему ?
поскольку у Яндекса нет API для получения общедоступных изображений (03.03.2018), то вчера утром я еще раз убедился, что его не существует, а точнее он есть , но только "на бумаге" [Yandex pictures api](https://yandex.ru/legal/pictures_api/) , я решил разработать его на основе внутреннего API Яндекс Картинок.

### С чего начать

Установим npm модуль  ```yandex-pictures```

```sh
$ npm install yandex-pictures -s
```

### Примеры

подключение модуля
```sh
const yapic = require("yandex-pictures")
```

чтобы начать вам понадобится объект с параметрами поиска

### Объект

обязательные параметры

| ключ | значение | информация |
| ------ | ------ | ------ |
| text | string | используется для поиска картинки по тексту|
| url | string | используется для поиска похожей картинки или оригинала |

не обязательные параметры

| ключ | значение | значение по-умолчанию | информация |
| ------ | ------ | ------ | ------ |
| isize | string | [large, medium, small, eq, wallpaper, eq] | используется для поиска картинки определенного размера |
| iw | int | * | используется для поиска картинки точного размера, при этом значение ключа "isize" должно быть "eq" |
| ih | int | * | используется для поиска картинки точного размера, при этом значение ключа "isize" должно быть "eq" |
| iorient | string | [square, horizontal, vertical] | используется для поиска картинки определенной ориентации |
| type | string | [photo, clipart, lineart, face, demotivator] | используется для поиска картинки определенного типа |
| icolor | string | [orange, color, gray, red, orange, yellow, cyan, green, blue] | используется для поиска картинки определенной цветовой гаммы |
| itype | string | [png, jpg, jpeg, gif] | используется для поиска картинки определенного типа файлов |
| page | int | 0 | используется для поиска картинки на точной позиции (смещении) |
| count | int | 30 | необходимое количество картинок которое нужно вернуть (пробовал 610 норм) |
| comm | int | [*, 1] | используется для поиска картинки в качестве товара |
| recent | string | [*, D7] | используется для поиска более свежих картинок |
| wp | string | [*, wh16x9_1366x768] | используется для поиска картинок для рабочего стола |
| site | string | * | используется для поиска картинки на определенном сайте |
| family| string | [0,1,2] | используется для цензурирования поиска 0 - без цензуры 1 - умеренный 2 - семейный поиск 
|

### Объект используется в следующих функциях
_асинхронная функция_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({
    
    text: "JSusDev",
    count: 2

}, (err, res) => {
    // обработка ошибок как везде...
    
    console.log(res) 
    
    /* тут вернется массив картинок
       если они если есть или 
       пустой массив */

}) 
```

_синхронная функция_
```sh
const yapic = require("yandex-pictures")

const images = yapic.getImageSync({

    text: "JSusDev",
    count: 2

})

console.log(images) 

/* тут вернется массив картинок
   если они если есть или 
   пустой массив */
```

> вы можете передать следующим параметром в каждую из функций объект с заголовками и тд 

_асинхронная функция_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({
    
    text: "JSusDev",
    count: 2

}, {/* ... обратитесь к библиотеке 'request' чтобы уточнить структуру объекта с настроками запроса ... */}, (err, res) => {

    console.log(res)

}) 
```

_синхронная функция_
```sh
const yapic = require("yandex-pictures")

const images = yapic.getImageSync({

    text: "JSusDev",
    count: 2

}, {/* ... обратитесь к библиотеке 'sync-request' чтобы уточнить структуру объекта с настроками запроса ... */})

console.log(images)
```

#### Еще немного примеров 
_асинхронная функция для поиска подобной картинки_
```sh
const yapic = require("yandex-pictures")

yapic.getImage({

    url: "https://static1.tgstat.com/public/images/channels/_0/82/822ecac8ab696703149dc7bb7ce2474d.jpg"

}, (err, res) => {

    console.log(res)
    
    /* тут вернется массив картинок
       если они если есть или 
       пустой массив */
       
})

```

_асинхронная функция для поиска картинки по параметрам объекта_
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
    
    /* тут вернется массив картинок
       если они если есть или 
       пустой массив */

})

```

### Контакты

Мой Телегам: @JSusDev, канал https://t.me/Jsusdevs

если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки я буду очень благодарен, также дайте мне знать

##### yandex-pictures by JSus


# <a name="enlang">yandex-pictures</a>

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

### Object

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
| family| string | [1,2,3] | allows you to configure search security |

### The object is used in the following functions

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

#### A few more examples

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

