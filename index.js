(function (global, name, factory) {
    "use strict";
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        global[name] = factory.apply(this);
    }
}(this, "site-linkage", function () {
    // start
    // console.log('start')
    // import address from './data/address.json'
    const address =  require('./data/address.json')
    console.log(address)
    return address
}));