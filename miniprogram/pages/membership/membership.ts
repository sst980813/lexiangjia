// membership.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    selectedLevel: 'gold',
    selectedPrice: 99,
    educationIndex: 0,
    educationOptions: ['高中及以下', '大专', '本科', '硕士', '博士'],
    canSubmit: false,
    formData: {
      name: '',
      phone: '',
      idCard: '',
      address: '',
      emergencyContact: '',
      emergencyPhone: '',
      hobbies: ''
    }
  },

  onLoad() {
    this.setSafeArea();
    this.checkFormValid();
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

  // 选择会员等级
  onSelectLevel(e: any) {
    const level = e.currentTarget.dataset.level;
    const prices = {
      gold: 99,
      platinum: 299,
      diamond: 999
    };
    
    this.setData({
      selectedLevel: level,
      selectedPrice: prices[level as keyof typeof prices]
    });
    
    this.checkFormValid();
  },

  // 学历选择
  onEducationChange(e: any) {
    this.setData({
      educationIndex: e.detail.value
    });
    this.checkFormValid();
  },

  // 输入框变化
  onInputChange(e: any) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    
    this.setData({
      [`formData.${field}`]: value
    });
    
    this.checkFormValid();
  },

  // 检查表单是否有效
  checkFormValid() {
    const { formData, educationIndex } = this.data;
    const requiredFields = ['name', 'phone', 'idCard', 'address', 'emergencyContact', 'emergencyPhone'];
    
    const isFormValid = requiredFields.every(field => {
      return formData[field as keyof typeof formData] && formData[field as keyof typeof formData].trim() !== '';
    }) && educationIndex !== undefined;
    
    this.setData({
      canSubmit: isFormValid
    });
  },

  // 提交表单
  onSubmit() {
    if (!this.data.canSubmit) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // 验证手机号格式
    const phoneReg = /^1[3-9]\d{9}$/;
    if (!phoneReg.test(this.data.formData.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }

    // 验证身份证号格式
    const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!idCardReg.test(this.data.formData.idCard)) {
      wx.showToast({
        title: '请输入正确的身份证号',
        icon: 'none'
      });
      return;
    }

    // 验证紧急联系人手机号
    if (!phoneReg.test(this.data.formData.emergencyPhone)) {
      wx.showToast({
        title: '请输入正确的紧急联系人手机号',
        icon: 'none'
      });
      return;
    }

    // 显示确认对话框
    wx.showModal({
      title: '确认付款',
      content: `确认支付 ¥${this.data.selectedPrice} 成为${this.getLevelName()}？`,
      success: (res) => {
        if (res.confirm) {
          this.processPayment();
        }
      }
    });
  },

  // 获取等级名称
  getLevelName() {
    const levelNames = {
      gold: '黄金会员',
      platinum: '铂金会员',
      diamond: '钻石会员'
    };
    return levelNames[this.data.selectedLevel as keyof typeof levelNames];
  },

  // 处理付款
  processPayment() {
    wx.showLoading({
      title: '处理中...'
    });

    // 模拟支付过程
    setTimeout(() => {
      wx.hideLoading();
      
      // 这里应该调用真实的支付接口
      // 现在只是模拟成功
      wx.showModal({
        title: '支付成功',
        content: '恭喜您成为乐享家会员！免费江浙沪旅居体验券已发放到您的账户。',
        showCancel: false,
        success: () => {
          // 返回首页
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      });
    }, 2000);
  }
});
