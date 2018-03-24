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
    // Version: 0.0.0
    // Author by 505072907@qq.com
    // import address from './data/address.json'
    const dataListJSON = {}

    dataListJSON[0] =  require('./data/0/data.json')
    dataListJSON[1] =  require('./data/1/data.json')
    dataListJSON[2] =  require('./data/2/data.json')
    dataListJSON[3] =  require('./data/3/data.json')
    dataListJSON[4] =  require('./data/4/data.json')
    dataListJSON[5] =  require('./data/5/data.json')
    dataListJSON[6] =  require('./data/6/data.json')
    dataListJSON[7] =  require('./data/7/data.json')
    dataListJSON[8] =  require('./data/8/data.json')
    dataListJSON[9] =  require('./data/9/data.json')
    dataListJSON[10] =  require('./data/10/data.json')
    dataListJSON[11] =  require('./data/11/data.json')
    dataListJSON[12] =  require('./data/12/data.json')
    dataListJSON[13] =  require('./data/13/data.json')
    dataListJSON[14] =  require('./data/14/data.json')
    dataListJSON[15] =  require('./data/15/data.json')
    dataListJSON[16] =  require('./data/16/data.json')
    dataListJSON[17] =  require('./data/17/data.json')
    dataListJSON[18] =  require('./data/18/data.json')
    dataListJSON[19] =  require('./data/19/data.json')
    dataListJSON[20] =  require('./data/20/data.json')
    dataListJSON[21] =  require('./data/21/data.json')
    dataListJSON[22] =  require('./data/22/data.json')
    dataListJSON[23] =  require('./data/23/data.json')
    dataListJSON[24] =  require('./data/24/data.json')
    dataListJSON[25] =  require('./data/25/data.json')
    dataListJSON[26] =  require('./data/26/data.json')
    dataListJSON[27] =  require('./data/27/data.json')
    dataListJSON[28] =  require('./data/28/data.json')
    dataListJSON[29] =  require('./data/29/data.json')
    dataListJSON[30] =  require('./data/30/data.json')
    dataListJSON[31] =  require('./data/31/data.json')
    dataListJSON[32] =  require('./data/32/data.json')
    dataListJSON[33] =  require('./data/33/data.json')

    // function getData(index) {
    //     // const dataUrl = '/data/'+ index +'/data.json'
    //     const dataList = dataListJSON[index]
    //     console.log('getData===>', dataList)
    //     // return dataList
    // }
    // province 省
    // city 市
    // county 县  //area 区
    // town 镇
    /*
["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏", "新疆", "台湾省", "澳门", "香港"]
*/ 
    const provinceListData = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏", "新疆", "台湾省", "澳门", "香港"]

      function Address() {
        this.province = null;
        this.provinceList = provinceListData;
        this.provinceListIndex = provinceListData;
        this.city = null;
        this.cityList = null;
        this.cityListIndex = null;
        this.area = null;
        this.areaList = null;
        this.areaListIndex = null;
        this.county = null;
        this.town = null;
        this.data = provinceListData; // 返回数据
    }
    Address.prototype = {
        // getData: function(index) {
        //     console.log(index)
        //     const dataUrl = './data/'+ index +'/data.json'
        //     const dataList = require(dataUrl)
        //     console.log('getData===>', dataList)
        // },
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
            const getDataList = dataListJSON[index]
            this.cityList = getDataList.city
            // this.cityList = this.provinceList[index].city
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
      }
    }

    return new Address()
    // }
}));