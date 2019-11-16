import dateformat from 'dateformat';
dateformat.i18n = {
    dayNames: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};
dateformat.masks.default = "dd mmmm  yyyy";

const host = 'http://server.xn--80aap3adkp6cxd.xn--p1ai';
export const gethost = () => host;
export const getImgUrlById = (id) => host + `/files/${id}`;
export const getImgUrlByIdWithParams = (id, {width, height}) => host + `/files/${id}/${width}/${height}`;
export const dateFormat = dateformat;
