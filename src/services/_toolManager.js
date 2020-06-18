export default class ToolManager {

    static range(from, to, step = 1) {
        const range = [];
        let i = from;

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    static parseUnixDate(unixDate) {
        return new Date(unixDate * 1000).toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    }

    static getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static setCookie(name, value, options = {}) {
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

    static deleteCookie(name) {
        this.setCookie(name, '', { 'max-age': -1 });
    }
}