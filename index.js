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
      function address(arguments) {
        // console.log(this)
        this.province = null;
        this.provinceList = addressList;
        this.provinceListIndex = [];
        this.city = null;
        this.cityList = null;
        this.cityListIndex = null;
        this.area = null;
        this.areaList = null;
        this.areaListIndex = null;
        this.county = null;
        this.town = null;
        // if (arguments) {
        //     console.log(arguments)
        // } else {
        //     return addressList;
        // }
        console.log(this)
        return this
    }
    address.prototype = {
     getProvince: (province) => {
        console.log('province==>', province)
        const provinceList = []
        this.province = province;
        this.provinceList.forE        console.log(this)ach(data => {
            // console.log(data)
            provinceList.push(data.name)
        })
        this.provinceListIndex = provinceList;
        if (!province) {
            console.log('没有输入省名')
        } else {
            const index = provinceList.indexOf(province);
            // this.province = province;
            this.cityList = this.provinceList[index].city;
            // return this.provinceList[index].city
        }
        return this
     },
      getCity: (city) => {
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
    }
    // console.log(address)
    // return address
    // window.$linkage = () => {
        return new address(arguments)
    // }
}));