# site-linkage 主要提供JSON格式的省市区三级联动数据
创建初衷：
由于项目所需，需要一份较新的中国各地省市县区的三级联动数据！不过经过几天的时间在网上搜集，发现确实没有较新的数据，或多或少有些缺陷，另外也发现不少人有这样的需求，因此自己花时间搜集了一份省市县区的三级联动数据，后期还会持续更新！有需要的朋友可以持续关注
本插件只提供数据源和基末的数据查询方式！
# 数据来源
数据采集整理来自各地方政府的网上政务中心行政区域信息

# 使用方式

``` bash
npm install site-linkage
```

``` javascript
const siteLinkage = require('site-linkage')
//siteLinkage.data  获取所有省的数组
//siteLinkage.getProvince('四川省').data  获取四川省下面所有的市的数组
//siteLinkage.getProvince('四川省').getCity('成都市').data  获取四川省成都市下面所有的区县的数组
```

# 采集方式和问题反馈
目前主要是手动采集，后期会抽时间，添加爬虫自动采集，并且希望各位网友发现数据问题之后可以与我联系：505072907@qq.com  


