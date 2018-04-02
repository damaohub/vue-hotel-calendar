<template>
  <div id="app" class="view view-main md  cutom-view">
    <div class="page">
      <div class="block-title">弹窗式</div>
      <div class="card">
        <div class="card-content">
          <div class="list links-list no-ios-edges">
            <ul>
              <li>
                <div class="item-link item-content" @click="isPopupOpen=true">
                  <div class="item-media"><img class="icon" src="./assets/date.png" alt=""></div>
                  <div class="item-inner item-cell">
                    <div class="item-row">
                      <div class="item-cell">
                        <strong>02月16日 </strong>
                        <small>周五</small>
                        <small>入住</small>
                      </div>     
                    </div>
                    <div class="item-row">     
                      <div class="item-cell">
                        <strong>02月17日 </strong>
                        <small>周六</small>
                        <small>离店</small>
                      </div> 
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        
        </div>
      </div>
    <div class="block-title">单选（钟点房）</div>
    <div class="card">
        <div class="card-content">
          <div class="list links-list no-ios-edges">
            <ul>
              <li>
                <div class="item-link item-content" @click="isPopupOpen1=true">
                  <div class="item-media"><img class="icon" src="./assets/date.png" alt=""></div>
                  <div class="item-inner item-cell">
                    <div class="item-row">
                      <div class="item-cell">
                        <strong>02月16日</strong>
                        <small>周五</small>
                        <small>入住</small>
                      </div>     
                    </div>
                    <div class="item-row">     
                      <div class="item-cell">
                        <strong>02月17日 </strong>
                        <small>周六</small>
                        <small>离店</small>
                      </div> 
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  <transition name="popup"> 
    <div class="popup" v-if="isPopupOpen">
       <calendar class="customClass" :range="calendar.range" :lunar="calendar.lunar" :value="calendar.value" :begin="calendar.begin" :end="calendar.end" @select="calendar.select" @navBack="goBack()">
          <!-- <div slot="navbarInner">这是自定义主导航</div> -->
      </calendar>
      </div>   
  </transition>

  <transition name="popup"> 
    <div class="popup" v-if="isPopupOpen1">
       <calendar class="customClass"  :lunar="calendar1.lunar" :value="calendar1.value" :begin="calendar1.begin" :end="calendar1.end" @select="calendar1.select" @navBack="goBack()">
          <!-- <div slot="navbarInner">这是自定义主导航</div> -->
      </calendar>
      </div>   
  </transition>
  
  <div :class="['popup-backdrop',isPopupOpen?'backdrop-in': '']" @click="isPopupOpen = false"></div>
 <div :class="['popup-backdrop',isPopupOpen1?'backdrop-in': '']" @click="isPopupOpen1 = false"></div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
          return {
                calendar:{
                range:true,
                //value:[[2018,1,5],[2018,1,6]], //默认日期
                lunar:false, //显示农历
                begin:[2017,11,16], //可选开始日期
                end:[2018,5,16], //可选结束日期
                select(begin,end){
                     console.log(begin.toString(),end.toString());
                }
            },
            isPopupOpen: false,
            calendar1:{
                value:[2018,1,6], //默认日期
                lunar:false, //显示农历
                begin:[2017,11,16], //可选开始日期
                end:[2018,3,16], //可选结束日期
                select(value){
                     console.log(value.toString());
                }
            },
            isPopupOpen1: false
          }
    },
    methods: {
      openPopup () {
       this.isPopupOpen = !this.isPopupOpen;
       this.isPopupOpen1 = !this.isPopupOpen1;
      },
      goBack(){
        this.isPopupOpen = false;
        this.isPopupOpen1 = false;
      }
    }

  }

</script>

<style>
*{-webkit-tap-highlight-color: transparent;}
 li{list-style-type: none;}
 .block-title {
    position: relative;
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin: 32px 16px 16px;
    line-height: 16px;
    font-weight: 500;
}

/* card */
 .card{
   background: #fff;
    position: relative;
    border-radius: 2px;
    font-size: 16px;
    margin: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
 }
 .card-content{
   position: relative;
 }
 .list, .list ul{position: relative;list-style: none; margin: 0;padding: 0;}
 .list li {
    position: relative;
    box-sizing: border-box;
    
    }
 .list .item-link, .list .list-button {
    transition-duration: .3s;
    transition-property: background-color;
    display: block;
    position: relative;
    overflow: hidden;
    z-index: 0;
     color: inherit;
}
.list .item-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 16px;
}

.list .item-inner, .list .item-media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 8px;
}
.list .item-media {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-top: 8px;
    min-width: 40px;
}
.list .item-inner {
    position: relative;
    width: 100%;
    padding-top: 8px;
    min-width: 0;
    min-height: 48px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
}
.list .item-cell {
    display: block;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    box-sizing: border-box;
    -ms-flex-negative: 1;
    flex-shrink: 1;
        width: 100%;
    min-width: 0;
    }
.links-list a, .list .item-link .item-inner, .media-list .item-link .item-title-row, li.media-item .item-link .item-title-row {
    background-size: 8px 13px;
    background-repeat: no-repeat;
    background-position: 95%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='13' viewBox='0 0 8 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23c7c7cc' d='M7.864 6.5L1.5.136.086 1.55l4.95 4.95-4.95 4.95L1.5 12.864l5.657-5.657z'/%3E%3C/svg%3E");
    }
.list .item-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
}
/* popup */
.popup {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    contain: strict;
    will-change: transform;
    display: none;
    box-sizing: border-box;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    background: #fff;
    z-index: 11000;
     display: block;
    transform: translateZ(0);
  }

.popup-backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 13000;
    visibility: hidden;
    opacity: 0;
    transition-duration: .4s;
    will-change: opacity;
    contain: strict;
    z-index: 10500;
}
.popup-backdrop.backdrop-in {
    visibility: visible;
    opacity: 1;
}
.popup-enter{transform: translate3d(0, 100%, 0);}
.popup-enter-to{
    transform: translate3d(0, 0, 0);
    transition-duration: 400ms;
}
.popup-leave-to{
     transform: translate3d(0, 100%, 0);
      transition-duration: 300ms;
}

@media (min-height: 630px) and (min-width: 630px){
  .popup{
    width: 630px;
    height: 630px;
    left: 50%;
    top: 50%;
    margin-left: -315px;
    margin-top: -315px;
    }
}
/* customClass */
.icon{color: #737373;width: 24px;}
.customClass.page-calendar .navbar .subnavbar .calendar-week-header {color: #000;}

</style>
