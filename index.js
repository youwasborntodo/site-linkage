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
    "use strict";
    // start
    // console.log('start')
    // import address from './data/address.json'
    const addressList =  require('./data/address.json')
    // province 省
    // city 市
    // county 县  //area 区
    // town 镇
      function Address() {
        // console.log(this)
        this.province = null;
        this.provinceList = addressList;
        this.provinceListIndex = null;
        this.city = null;
        this.cityList = null;
        this.cityListIndex = null;
        this.area = null;
        this.areaList = null;
        this.areaListIndex = null;
        this.county = null;
        this.town = null;
        this.data = null; // 返回数据
        // if (arguments) {
        //     console.log(arguments)
        // } else {
        //     return addressList;
        // }
        console.log('log==for=>', this)
        // return this.dataList
    }
    Address.prototype = {
        queryData: function(data, list) {
            const dataIndexList = []
            list.forEach(item => {
                const name = item.name ? item.name : item
                dataIndexList.push(name)
            })
            switch(data) {
                case 'province':
                    this.provinceListIndex = dataIndexList
                    break;
                case 'city':
                    this.cityListIndex = dataIndexList
                    break;
                case 'area':
                    this.areaListIndex = dataIndexList
                    break;
                default:
                    console.log('data type error!')

            }
        },
     getProvince: function(province) {
        // const provinceList = []
        if (this.provinceListIndex && this.provinceListIndex.includes(province)){
            const index = this.provinceListIndex.indexOf(province);
            // if (this.provinceList[province]) {
            this.province = province;
            this.cityList = this.provinceList[index].city
            this.queryData('city', this.cityList)
            this.data = this.cityListIndex
            // console.log(this.cityList)
            // } else {
            // } 
        } else {
            console.log('province==>', province)
            this.queryData('province', this.provinceList)
            this.getProvince(province)
        }
        return this
     },
      getCity: function(city) {
        if (this.cityListIndex && this.cityListIndex.includes(city)){
            const index = this.cityListIndex.indexOf(city);
            // if (this.provinceList[province]) {
            this.city = city;
            this.areaList = this.cityList[index].area
            this.queryData('area', this.areaList)
            this.data = this.areaListIndex
            // console.log(this.areaList)
            // } else {
            // } 
        } else {
            console.log('city==>', city)
            this.queryData('city', this.cityList)
            this.getCity(city)
        }
        return this
      },
        getArea: function(area) {
        if (this.areaListIndex && this.areaListIndex.includes(area)){
            const index = this.areaListIndex.indexOf(area);
            // if (this.provinceList[province]) {
            this.area = area;
            this.data = this.areaListIndex
            // console.log(this.areaList)
            // } else {
            // } 
        } else {
            console.log('area==>', area)
            this.queryData('area', this.areaList)
        }
        return this
      },
        init: function(){
            this.queryData('province', this.provinceList)
            this.data = this.provinceListIndex
        }
    }
    // Address.init()
    // console.log(address)
    // return address
    // window.$linkage = () => {
        const linkage = new Address()
        linkage.init()
        return linkage
        // return new Address()
    // }
}));