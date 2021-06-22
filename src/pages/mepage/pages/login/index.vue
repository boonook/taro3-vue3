<template>
  <view class="index">
    <button type="primary" @tap="onLogin()">
      登录
    </button>
    <AtButton>按钮文案</AtButton>
    <AtButton type='primary'>按钮文案</AtButton>
    <AtButton type='secondary'>按钮文案</AtButton>
    <AtActionSheet
      :isOpened="true"
    >
      <AtActionSheetItem>
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem>
        按钮二
      </AtActionSheetItem>
    </AtActionSheet>
  </view>
</template>
<script>
import "./index.scss";
import Taro from "@tarojs/taro";
import {mapActions} from 'vuex';
export default {
  components:{
   
  },
  data() {
    return {
      isOpened:false
    };
  },

  /**
   * 页面创建时执行，此生命周期在小程序端对应小程序页面的 onLoad 生命周期。此生命周期可以访问 getCurrentInstance().router
   */
  onLoad(options) {
    
  },
  /**
   * 页面加载时触发，一个页面只会调用一次，此时页面 DOM 尚未准备好，还不能和视图层进行交互
   */
  onCreate() {
   
  },

  /**
   * 页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
   */
  mounted() {
   
  },

  /**
   * 页面即将更新
   */
  beforeUpdate() {
   
  },
  /**
   * 页面更新完毕
   */
  updated() {
    
  },
  /**
   * 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
   */
  beforeDestroy() {
    
  },

  /**
   * 页面显示/切入前台时触发
   */
  onShow() {
    
  },

  /**
   * 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
   */
  onHide() {
    
  },

  /**
   * 监听用户下拉刷新事件
   */
  onPullDownRefresh() {
    
  },

  methods: {
    ...mapActions([
      'handle',
    ]),
    onLogin() {
      this.isOpened = true;
    },

    handleOk(){
      Taro.switchTab({
        url: "/pages/home/index",
      })
    },

    handleClose(){
      this.isOpened = false;
    },
    handleOnCancel(){
      this.isOpened = false;
    }
  }
};
</script>
