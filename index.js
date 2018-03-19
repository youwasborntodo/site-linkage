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
    // province 省
    // city 市
    // county 县  //area 区
    // town 镇
      function address() {
        // console.log(this)
        this.province = null;
        this.provinceListIndex = [];
        this.city = null;
        this.cityList = null;
        this.cityListIndex = null;
        this.area = null;
        this.areaList = null;
        this.areaListIndex = null;
        this.county = null;
        this.town = null;
        return addressList;
        // this.prototype.getData = (data) => {
        //     if (!province) {
        //         return addressList
        //     } else {
        //         const index = addressIndex.indexOf(name)
        //         return addressList[index]
        //     }
        // }
    }
            address.__proto__.getProvince = (province) => {
                console.log('province==>', province)
            const provinceList = []
            addressList.forEach(data => {
                // console.log(data)
                provinceList.push(data.name)
            })
            address.provinceListIndex = provinceList;
            if (!province) {
                return addressList;
            } else {
                const index = provinceList.indexOf(province);
                address.province = province;
                address.cityList = addressList[index].city;
                return addressList[index].city
                // const index = addressIndex.indexOf(province);
                // return addressList[index];
            }

        }
        address.__proto__.getCity = (city) => {
                    console.log('city==>', city)
                    const cityList = []
            if (address.province) {
                address.cityList.forEach(item => {
                    cityList.push(item.name)
                })
                address.cityListIndex = cityList
                if (city) {
                    address.city = city
                    const index = cityList.indexOf(city)
                    address.areaList = address.cityList[index].area
                    return address.cityList[index].area
                } else {
                    return '没有输入城市名';
                }
            } else {
                // 如果没有输入省名，默认返回所有当前
                return '没有输入省名';
            }
        }
    // console.log(address)
    return address
}));