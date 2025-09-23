// index.ts

Component({
  data: {
    // Banner图片
    // bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bannerImage:'../../public/img/banner.jpg',
    
    // 当前选中的底部菜单
    currentTab: 0,
    
    // 安全区域相关
    safeAreaClass: '',
    safeAreaStyle: '',
    
    // 旅游列表数据
    travelList: [
      {
        id: 1,
        title: '用直古镇',
        location: '江苏苏州',
        price: '688',
        rating: '4.8',
        image: '../../public/img/luzhi.jpg'
      },
      {
        id: 2,
        title: '周庄古镇',
        location: '江苏苏州',
        price: '758',
        rating: '4.9',
        image: '../../public/img/zhouzhuang.jpg'
      },
      {
        id: 3,
        title: '乐山犍为小火车',
        location: '四川乐山',
        price: '899',
        rating: '4.7',
        image: '../../public/img/jianwei.jpg'
      },
      {
        id: 4,
        title: '黑龙江伊春小兴安岭森林氧吧',
        location: '黑龙江伊春',
        price: '1288',
        rating: '4.9',
        image: '../../public/img/xiaoxing.jpeg'
      }
    ]
  },
  
  methods: {
    // 功能按钮点击事件
    onButtonTap(e: any) {
      const type = e.currentTarget.dataset.type
      console.log('点击了功能按钮:', type)
      
      wx.showToast({
        title: `${this.getButtonName(type)}功能开发中`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 获取按钮名称
    getButtonName(type: string): string {
      const nameMap: { [key: string]: string } = {
        living: '旅居养老',
        leisure: '休闲养老',
        happy: '快乐养老',
        member: '会员权益'
      }
      return nameMap[type] || '未知功能'
    },
    
    // 旅游项目点击事件
    onTravelItemTap(e: any) {
      const item = e.currentTarget.dataset.item
      console.log('点击了旅游项目:', item)
      
      wx.showToast({
        title: `查看${item.title}详情`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 查看更多点击事件
    onViewMore() {
      console.log('查看更多旅游项目')
      wx.showToast({
        title: '查看更多功能开发中',
        icon: 'none',
        duration: 2000
      })
    },
    

    
    // 初始化安全区域
    initSafeArea() {
      try {
        const systemInfo = wx.getSystemInfoSync()
        console.log('系统信息:', systemInfo)
        
        const { model, screenHeight, safeArea } = systemInfo
        let safeAreaBottom = 0
        
        // 优先使用系统提供的safeArea信息
        if (safeArea && safeArea.bottom && screenHeight) {
          safeAreaBottom = screenHeight - safeArea.bottom
          console.log('safeArea.bottom:', safeArea.bottom, 'screenHeight:', screenHeight)
        }
        
        // 如果系统值不可靠或为负数，使用设备型号判断
        if (safeAreaBottom <= 0 && model && model.includes('iPhone')) {
          if (model.includes('iPhone X') || model.includes('iPhone 11') || 
              model.includes('iPhone 12') || model.includes('iPhone 13') || 
              model.includes('iPhone 14') || model.includes('iPhone 15')) {
            safeAreaBottom = 34 // iPhone X系列的标准安全区域高度
          }
        }
        
        console.log('底部安全区域高度:', safeAreaBottom)
        
        // 只有在合理范围内才应用安全距离
        if (safeAreaBottom > 0 && safeAreaBottom <= 50) {
          const safeAreaBottomPx = safeAreaBottom * 2 + 'rpx'
          
          this.setData({
            safeAreaClass: 'safe-area',
            safeAreaStyle: `--safe-area-bottom: ${safeAreaBottomPx};`
          })
          
          console.log('已设置安全区域:', safeAreaBottomPx)
        } else {
          console.log('无需设置安全区域，值:', safeAreaBottom)
        }
      } catch (error) {
        console.error('获取系统信息失败:', error)
      }
    }
  },
  
  // 页面生命周期
  lifetimes: {
    attached() {
      console.log('主页组件已加载')
      this.initSafeArea()
    }
  }
})
