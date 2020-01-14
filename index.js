/* DrewSnow v0.0.1 | (c) https://github.com/SnowLord7 */

/*
 * Script by Drew Snow for miscellaneous uses 
 * This script is for educational purposes only, I am in no way responsible for anything that happens in result.
 */

function Exploit () {
    this.clear_cookies();
    this.stop();
}

Exploit.prototype.clear_cookies = function () {
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; ++i) {
        let cookie = cookies[i],
            index = cookie.indexOf('='),
            name = index > -1 ? cookie.substr(0, index) : cookie;

        document.cookie = name + '=;expires=Mon, 01 Jan 1970 00:00:00 GMT';
    }
    return document.cookie;
};

Exploit.prototype.stop = function () {
    let timeouts = setTimeout(';');
    for (let i = 0; i < timeouts; ++i) clearTimeout(i);
    return timeouts;
};

new Exploit();
