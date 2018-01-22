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
      <div class="block-title">小改样式</div>
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
      
    </div>
  <transition name="popup"> 
    <div class="popup" v-if="isPopupOpen">
       <calendar class="customClass" :range="calendar2.range" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select" @navBack="goBack">
          <!-- <div slot="navbarInner">这是自定义主导航</div> -->
      </calendar>
      </div>   
  </transition>
  
  <div :class="['popup-backdrop',isPopupOpen?'backdrop-in': '']" @click="isPopupOpen = !isPopupOpen"></div>
 
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
          return {
                calendar2:{
                range:true,
                value:[[2018,1,5],[2018,1,6]], //默认日期
                lunar:false, //显示农历
                begin:[2017,11,16], //可选开始日期
                end:[2018,3,16], //可选结束日期
                select(begin,end){
                     console.log(begin.toString(),end.toString());
                }
            },
            isPopupOpen: false
          }
    },
    methods: {
      openPopup () {
       this.isPopupOpen = !this.isPopupOpen;
      },
      goBack(){
        this.isPopupOpen = false;
      }
    }

  }

</script>

<style>
 li{list-style-type: none;}
  @import url('./assets/css/framework7.min.css'); 
  /* @import url('./assets/MaterialIcons/material-icons.css'); */
  .icon{width: 24px;}
  .customClass.page-calendar .navbar { background: #fff;color: #000;}
  .customClass.page-calendar .navbar .subnavbar{background: #ddd;}
  .md .customClass.page-calendar .navbar .subnavbar .calendar-week-header {color: #000;}
.popup{display: block;transform: translate3d(0, 0, 0);}
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
 .cutom-view .popup{transform: translate3d(0,0,0);}
}

</style>
