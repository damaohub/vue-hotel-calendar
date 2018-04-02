# Vue Hotel Calendar ![version](https://img.shields.io/badge/version-%20v1.1.0%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v2.1%20-green.svg)
[vue-hotel-calendar](https://github.com/damaohub/vue-hotel-calendar) 是适用于移动端 [vue](https://github.com/vuejs/vue)的一个插件，仿艺龙或者去哪儿的酒店预订页面的日历组件。  
## Demo
[https://damaohub.github.io/vue-hotel-calendar](https://damaohub.github.io/vue-hotel-calendar)
(chrome 在调试手机模式下查看效果更佳)
## API
#### vue-hotel-calendar component attributes:

| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| multi | 是否多选 | N | false|
| range | 是否连续范围选择| N | false|
| value | 默认日期 | Y | []|
| begin | 开始选择日期 | N | 今天 |
| end | 结束选择日期 | N | [] |
| count | 渲染的月数 | N | Number | |果存在begin和end,从开始选择的日期begin的当月开始算起，默认到结束日期end之间的月数|
| zero | 是否小于10补零 | N | false | 
| disabled | 屏蔽的日期 | N | [] |
| lunar | 是否显示农历 | N | false |
| weeks | 自定义星期名称 | N | "zh-cn"?['日', '一', '二', '三', '四', '五', '六']:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']|
| months | 自定义月份| N | "zh-cn"?['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']|
| events | 自定义事件 | N | {} |
