// member-benefits.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: ''
  },

  onLoad() {
    this.setSafeArea();
  },

  onShow() {
    this.setSafeArea();
  },

  // 设置安全区域
  setSafeArea() {
    const systemInfo = wx.getSystemInfoSync();
    const safeArea = systemInfo.safeArea;
    const screenHeight = systemInfo.screenHeight;
    
    if (safeArea && safeArea.top > 0) {
      const safeAreaTop = safeArea.top;
      const safeAreaBottom = screenHeight - safeArea.bottom;
      
      this.setData({
        safeAreaClass: 'safe-area',
        safeAreaStyle: `padding-top: ${safeAreaTop}px; padding-bottom: ${safeAreaBottom}px;`
      });
    }
  },

  // 跳转到会籍申请页面
  onJoinMembership() {
    wx.navigateTo({
      url: '/pages/membership/membership'
    });
  }
});
