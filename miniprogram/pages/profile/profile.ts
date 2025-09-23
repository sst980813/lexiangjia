// profile.ts
Component({
  data: {
    // 用户信息
    userInfo: {
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      nickName: 'Franky'
    },
    
    // 用户统计数据
    userStats: {
      credits: '0',
      balance: '0.00',
      points: '0.00'
    },
    
    // 安全区域相关
    safeAreaClass: '',
    safeAreaStyle: ''
  },
  
  methods: {
    // 会员卡片点击事件
    onMemberTap() {
      console.log('点击了会员权益卡片')
      wx.showToast({
        title: '会员功能开发中',
        icon: 'none',
        duration: 2000
      })
    },
    
    // 菜单项点击事件
    onMenuTap(e: any) {
      const type = e.currentTarget.dataset.type
      console.log('点击了菜单项:', type)
      
      const menuNames: { [key: string]: string } = {
        wallet: '待付款',
        shipped: '待出行',
        comment: '待评价',
        refund: '售后/退款',
        orders: '全部订单'
      }
      
      wx.showToast({
        title: `${menuNames[type] || '未知功能'}开发中`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 工具项点击事件
    onToolTap(e: any) {
      const type = e.currentTarget.dataset.type
      console.log('点击了工具项:', type)
      
      const toolNames: { [key: string]: string } = {
        info: '常用信息',
        shop: '我的主页',
        browser: '浏览足迹',
        service: '联系客服',
        collect: '收藏路线',
        settings: '账户设置'
      }
      
      wx.showToast({
        title: `${toolNames[type] || '未知功能'}开发中`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 加载用户数据
    loadUserData() {
      // 这里可以从后端API获取用户数据
      // 暂时使用模拟数据
      this.setData({
        userStats: {
          credits: '3',
          balance: '128.50',
          points: '1580'
        }
      })
    }
  },
  
  // 页面生命周期
  lifetimes: {
    attached() {
      console.log('我的页面组件已加载')
      this.loadUserData()
    }
  }
})
