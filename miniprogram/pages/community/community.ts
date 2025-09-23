// community.ts
Component({
  data: {
    // 当前选中的标签页
    currentTab: 0,
    
    // 安全区域相关
    safeAreaClass: '',
    safeAreaStyle: '',
    
    // 我的社群
    myGroups: [
      {
        id: 1,
        name: '书法爱好者',
        icon: '🖌️',
        memberCount: 128
      },
      {
        id: 2,
        name: '太极晨练',
        icon: '🥋',
        memberCount: 85
      }
    ],
    
    // 兴趣社群数据
    interestGroups: [
      {
        id: 1,
        name: '书法绘画',
        description: '挥毫泼墨，陶冶情操，与书画爱好者一起交流心得',
        icon: '🖌️',
        memberCount: 256,
        activityLevel: '活跃',
        joined: false,
        recentPost: {
          content: '今日练习《兰亭序》，分享一些心得体会...',
          time: '2小时前'
        }
      },
      {
        id: 2,
        name: '戏曲合唱',
        description: '传承经典，唱响人生，京剧、豫剧、黄梅戏应有尽有',
        icon: '🎭',
        memberCount: 189,
        activityLevel: '热门',
        joined: true,
        recentPost: {
          content: '本周六下午排练《红楼梦》选段，欢迎新朋友...',
          time: '1天前'
        }
      },
      {
        id: 3,
        name: '手工编织',
        description: '巧手编织温暖，为家人朋友制作贴心小物件',
        icon: '🧶',
        memberCount: 142,
        activityLevel: '温馨',
        joined: false,
        recentPost: {
          content: '刚完成的小孙女毛衣，大家看看怎么样？',
          time: '3小时前'
        }
      },
      {
        id: 4,
        name: '孙辈育儿交流',
        description: '分享育儿经验，交流隔代教育心得，科学带娃',
        icon: '👶',
        memberCount: 324,
        activityLevel: '超热',
        joined: false,
        recentPost: {
          content: '孙子不爱吃饭怎么办？有什么好方法吗？',
          time: '30分钟前'
        }
      },
      {
        id: 5,
        name: '养生保健',
        description: '健康生活，科学养生，分享保健知识和经验',
        icon: '🌿',
        memberCount: 198,
        activityLevel: '活跃',
        joined: true,
        recentPost: {
          content: '春季养生小贴士：多吃这些食物对身体好',
          time: '5小时前'
        }
      },
      {
        id: 6,
        name: '摄影分享',
        description: '用镜头记录美好生活，分享摄影技巧和作品',
        icon: '📷',
        memberCount: 167,
        activityLevel: '文艺',
        joined: false,
        recentPost: {
          content: '今天在公园拍的樱花，春天真美！',
          time: '6小时前'
        }
      }
    ],
    
    // 我的活动
    myActivities: [
      {
        id: 1,
        title: '邻里茶话会',
        time: '明天 14:00',
        status: 'upcoming',
        statusText: '即将开始'
      },
      {
        id: 2,
        title: '银发故事会',
        time: '上周六 15:00',
        status: 'completed',
        statusText: '已结束'
      }
    ],
    
    // 主题活动数据
    themeActivities: [
      {
        id: 1,
        title: '银发故事会 - 我的青春岁月',
        description: '邀请社区长者分享青春年华的美好回忆，传承人生智慧',
        type: '线上活动',
        time: '本周六 15:00-17:00',
        location: '线上直播间',
        participants: 45,
        maxParticipants: 100,
        price: 0,
        needCompanion: false,
        participated: false,
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        title: '邻里茶话会 - 春日赏花',
        description: '社区邻里聚会，品茶赏花，增进邻里感情，分享生活趣事',
        type: '线下聚会',
        time: '下周日 14:00-16:00',
        location: '社区活动中心',
        participants: 12,
        maxParticipants: 20,
        price: 0,
        needCompanion: true,
        participated: true,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        title: '书法交流会',
        description: '书法爱好者聚会，现场挥毫泼墨，互相学习交流技艺',
        type: '线下活动',
        time: '下周三 09:00-11:00',
        location: '文化活动室',
        participants: 8,
        maxParticipants: 15,
        price: 20,
        needCompanion: false,
        participated: false,
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        title: '健康养生讲座',
        description: '邀请专业医师讲解春季养生知识，现场答疑解惑',
        type: '健康讲座',
        time: '下周五 10:00-12:00',
        location: '社区会议室',
        participants: 28,
        maxParticipants: 50,
        price: 0,
        needCompanion: true,
        participated: false,
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  
  methods: {
    // 顶部导航切换
    onNavTap(e: any) {
      const index = e.currentTarget.dataset.index
      console.log('点击了顶部导航:', index)
      this.setData({
        currentTab: index
      })
    },
    
    // 社群点击事件
    onGroupTap(e: any) {
      const group = e.currentTarget.dataset.group
      console.log('点击了我的社群:', group)
      wx.showToast({
        title: `进入${group.name}`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 社群详情点击
    onGroupDetailTap(e: any) {
      const group = e.currentTarget.dataset.group
      console.log('查看社群详情:', group)
      wx.showModal({
        title: group.name,
        content: `${group.description}\n\n当前成员：${group.memberCount}人\n活跃度：${group.activityLevel}`,
        showCancel: false
      })
    },
    
    // 加入社群
    onJoinGroup(e: any) {
      const group = e.currentTarget.dataset.group
      console.log('申请加入社群:', group)
      
      if (group.joined) {
        wx.showToast({
          title: '您已是该社群成员',
          icon: 'none',
          duration: 2000
        })
        return
      }
      
      wx.showModal({
        title: '申请加入社群',
        content: `确定要申请加入"${group.name}"吗？`,
        success: (res) => {
          if (res.confirm) {
            // 更新数据状态
            const groups = this.data.interestGroups
            const index = groups.findIndex(item => item.id === group.id)
            if (index !== -1) {
              groups[index].joined = true
              groups[index].memberCount += 1
              this.setData({
                interestGroups: groups
              })
            }
            
            wx.showToast({
              title: '申请已提交，等待审核',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
    },
    
    // 我的活动点击
    onActivityTap(e: any) {
      const activity = e.currentTarget.dataset.activity
      console.log('点击了我的活动:', activity)
      wx.showToast({
        title: `查看${activity.title}详情`,
        icon: 'none',
        duration: 2000
      })
    },
    
    // 活动详情点击
    onActivityDetailTap(e: any) {
      const activity = e.currentTarget.dataset.activity
      console.log('查看活动详情:', activity)
      
      let content = `${activity.description}\n\n`
      content += `时间：${activity.time}\n`
      content += `地点：${activity.location}\n`
      content += `人数：${activity.participants}/${activity.maxParticipants}\n`
      if (activity.price > 0) {
        content += `费用：¥${activity.price}\n`
      } else {
        content += `费用：免费\n`
      }
      if (activity.needCompanion) {
        content += `\n💡 建议家属陪同参加`
      }
      
      wx.showModal({
        title: activity.title,
        content: content,
        showCancel: false
      })
    },
    
    // 参与活动
    onParticipateActivity(e: any) {
      const activity = e.currentTarget.dataset.activity
      console.log('报名参与活动:', activity)
      
      if (activity.participated) {
        wx.showToast({
          title: '您已报名该活动',
          icon: 'none',
          duration: 2000
        })
        return
      }
      
      if (activity.participants >= activity.maxParticipants) {
        wx.showToast({
          title: '活动人数已满',
          icon: 'none',
          duration: 2000
        })
        return
      }
      
      let confirmContent = `确定要报名参加"${activity.title}"吗？`
      if (activity.price > 0) {
        confirmContent += `\n\n费用：¥${activity.price}`
      }
      if (activity.needCompanion) {
        confirmContent += `\n\n💡 建议家属陪同参加`
      }
      
      wx.showModal({
        title: '活动报名',
        content: confirmContent,
        success: (res) => {
          if (res.confirm) {
            // 更新数据状态
            const activities = this.data.themeActivities
            const index = activities.findIndex(item => item.id === activity.id)
            if (index !== -1) {
              activities[index].participated = true
              activities[index].participants += 1
              this.setData({
                themeActivities: activities
              })
            }
            
            wx.showToast({
              title: '报名成功！',
              icon: 'success',
              duration: 2000
            })
          }
        }
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
      console.log('社区页面组件已加载')
      this.initSafeArea()
    }
  }
})
