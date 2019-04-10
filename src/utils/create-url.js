const j = ''

module.exports = ({ text, isize, iw, ih, iorient, type, icolor, itype, url, page, comm, recent, wp, site, family }) => {
    let _url = 'https://yandex.ru/images/search?'

    _url += text                    ? `text=${encodeURIComponent(text)}`                    : j
    _url += url                     ? `url=${encodeURIComponent(url)}&rpt=imagelike`        : j
    _url += isize                   ? `&isize=${isize}`                                     : j
    _url += iw                      ? `&iw=${iw}`                                           : j
    _url += ih                      ? `&ih=${ih}`                                           : j
    _url += iorient                 ? `&iorient=${iorient}`                                 : j
    _url += type                    ? `&type=${type}`                                       : j
    _url += itype                   ? `&itype=${itype}`                                     : j
    _url += icolor                  ? `&icolor=${icolor}`                                   : j
    _url += page                    ? `&p=${page}`                                          : j
    _url += comm                    ? `&comm=${comm}`                                       : j
    _url += recent                  ? `&recent=${recent}`                                   : j
    _url += wp                      ? `&wp=${wp}`                                           : j
    _url += site                    ? `&site=${site}`                                       : j
    _url += family != undefined     ? `&family=${family}`                                   : j

    _url += '&format=json&request={"blocks":[{"block":"gallery__items:ajax","params":{},"version":2}]}'

    return _url
}