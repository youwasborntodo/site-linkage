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
    const addressList =  require('./data/address.json')
    const addressIndex = []
    addressList.forEach(data => {
        // console.log(data)
        addressIndex.push(data.name)
    })
    const address = (name) => {
        if (!name) {
            return addressList
        } else {
            const index = addressIndex.indexOf(name)
            return addressList[index]
        }
    }
    // console.log(address)
    return address
}));