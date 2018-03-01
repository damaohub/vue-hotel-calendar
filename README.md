# Vue Hotel Calendar ![version](https://img.shields.io/badge/version-%20v1.1.0%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v2.1%20-green.svg)
[vue-hotel-calendar](https://github.com/damaohub/vue-hotel-calendar) 是适用于移动端 [vue](https://github.com/vuejs/vue)的一个插件，仿艺龙或者去哪儿的酒店预订页面的日历组件。  
## Demo
[https://damaohub.github.io/vue-hotel-calendar](https://damaohub.github.io/vue-hotel-calendar)
(chrome 在调试手机模式下查看效果更佳)
## API
#### vue-hotel-calendar component attributes:

| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| onRefresh | pull to refresh callback | N | - |
| onInfinite | infinite loading callback | N | - |
| onInfinite | infinite loading callback | N | - |
| refreshText | tips of `pull-to-refresh` | N | 下拉刷新 |
| noDataText | tips of `no-more-data` when `infinite-loading` finished | N | 没有更多数据 |
| width | scroller container width | N | `100%` |
| height | scroller container height | N | `100%` |
| snapping | enable snapping mode | N | `false` |
| snappingWidth | snapping width | N | 100 (stand for 100px) |
| snappingHeight | snapping height | N | 100 |
| refreshLayerColor | text color of `pull-to-refresh` layer | N | #AAA |
| loadingLayerColor | text color of `infinite-loading` layer | N | #AAA |
| minContentHeight | min content height (px) of `scroll-content` | N | 0 |