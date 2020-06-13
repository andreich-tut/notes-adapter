export default class ToolManager {
    constructor(ServiceManager) {
        this._serviceManager = ServiceManager;
    }

    range(from, to, step = 1) {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    parseUnixDate(unixDate) {
        return new Date(unixDate * 1000).toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    }

    getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = `${ encodeURIComponent(name) }=${ encodeURIComponent(value) }`;

        for (let optionKey in options) {
            updatedCookie += `; ${ optionKey }`;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    deleteCookie(name) {
        this.setCookie(name, '', { 'max-age': -1 });
    }
}