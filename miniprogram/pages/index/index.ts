// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    // Banner图片
    bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    
    // 当前选中的底部菜单
    currentTab: 0,
    
    // 旅游列表数据
    travelList: [
      {
        id: 1,
        title: '用直古镇',
        location: '江苏苏州',
        price: '688',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        title: '周庄古镇',
        location: '江苏苏州',
        price: '758',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        title: '乐山建为小火车',
        location: '四川乐山',
        price: '899',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        title: '黑龙江伊春小兴安岭森林氧吧',
        location: '黑龙江伊春',
        price: '1288',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
    
    // 底部菜单点击事件
    onTabTap(e: any) {
      const index = e.currentTarget.dataset.index
      console.log('点击了底部菜单:', index)
      
      this.setData({
        currentTab: index
      })
      
      const tabNames = ['首页', '活动', '我的']
      if (index !== 0) {
        wx.showToast({
          title: `${tabNames[index]}页面开发中`,
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  
  // 页面生命周期
  lifetimes: {
    attached() {
      console.log('主页组件已加载')
    }
  }
})
