// smart-care.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    currentCategory: 'all',
    totalActivities: 28,
    activeMembers: 156,
    satisfactionRate: 98,
    filteredActivities: [],
    featuredActivities: [],
    activities: [
      // 文化类活动
      {
        id: 1,
        title: '经典文学读书会',
        description: '每周分享经典文学作品，探讨人生哲理，提升文学素养',
        image: '../../public/img/reading.jpg',
        category: 'culture',
        categoryName: '文化',
        date: '每周三',
        time: '14:00-16:00',
        location: '文化中心',
        participants: 25,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 2,
        title: '历史文化讲座',
        description: '邀请专家学者讲解历史文化，了解中华文明精髓',
        image: '../../public/img/history.jpg',
        category: 'culture',
        categoryName: '文化',
        date: '每月第一周',
        time: '10:00-12:00',
        location: '学术报告厅',
        participants: 45,
        status: 'upcoming',
        statusText: '即将开始'
      },
      {
        id: 3,
        title: '诗词朗诵会',
        description: '朗诵经典诗词，感受中华诗词之美，陶冶情操',
        image: '../../public/img/poetry.jpg',
        category: 'culture',
        categoryName: '文化',
        date: '每周五',
        time: '15:00-17:00',
        location: '花园凉亭',
        participants: 18,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 4,
        title: '书法练习班',
        description: '学习传统书法艺术，修身养性，传承文化',
        image: '../../public/img/calligraphy.jpg',
        category: 'culture',
        categoryName: '文化',
        date: '每周二、四',
        time: '09:00-11:00',
        location: '书画室',
        participants: 22,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 养生类活动
      {
        id: 5,
        title: '太极拳晨练',
        description: '学习太极拳，强身健体，调和气血，延年益寿',
        image: '../../public/img/taichi.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每日早晨',
        time: '07:00-08:00',
        location: '中心广场',
        participants: 35,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 6,
        title: '养生保健讲座',
        description: '专业医师讲解养生保健知识，学习健康生活方式',
        image: '../../public/img/health.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每月第二周',
        time: '14:00-16:00',
        location: '健康中心',
        participants: 60,
        status: 'upcoming',
        statusText: '即将开始'
      },
      {
        id: 7,
        title: '中医养生体验',
        description: '体验中医养生方法，学习穴位按摩，了解食疗养生',
        image: '../../public/img/tcm.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每周六',
        time: '10:00-12:00',
        location: '中医馆',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 8,
        title: '园艺疗法',
        description: '通过园艺活动调节身心，享受种植乐趣，缓解压力',
        image: '../../public/img/gardening.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每周一、三',
        time: '15:00-17:00',
        location: '社区花园',
        participants: 28,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 艺术类活动
      {
        id: 9,
        title: '国画写生班',
        description: '学习国画技法，外出写生，感受自然之美',
        image: '../../public/img/painting.jpg',
        category: 'art',
        categoryName: '艺术',
        date: '每周四',
        time: '09:00-12:00',
        location: '画室/户外',
        participants: 15,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 10,
        title: '古典音乐会',
        description: '欣赏古典音乐，学习音乐知识，陶冶情操',
        image: '../../public/img/music.jpg',
        category: 'art',
        categoryName: '艺术',
        date: '每月第三周',
        time: '19:00-21:00',
        location: '音乐厅',
        participants: 80,
        status: 'upcoming',
        statusText: '即将开始'
      },
      {
        id: 11,
        title: '手工制作工坊',
        description: '学习传统手工艺，制作精美工艺品，培养创造力',
        image: '../../public/img/craft.jpg',
        category: 'art',
        categoryName: '艺术',
        date: '每周二',
        time: '14:00-16:00',
        location: '手工坊',
        participants: 12,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 12,
        title: '摄影采风活动',
        description: '学习摄影技巧，外出采风，记录美好瞬间',
        image: '../../public/img/photography.jpg',
        category: 'art',
        categoryName: '艺术',
        date: '每月第一周',
        time: '08:00-17:00',
        location: '各景点',
        participants: 20,
        status: 'upcoming',
        statusText: '即将开始'
      },
      
      // 社交类活动
      {
        id: 13,
        title: '茶艺品鉴会',
        description: '学习茶艺文化，品鉴各种名茶，结交茶友',
        image: '../../public/img/tea.jpg',
        category: 'social',
        categoryName: '社交',
        date: '每周五',
        time: '15:00-17:00',
        location: '茶艺室',
        participants: 16,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 14,
        title: '棋牌友谊赛',
        description: '象棋、围棋、麻将等棋牌活动，增进友谊',
        image: '../../public/img/chess.jpg',
        category: 'social',
        categoryName: '社交',
        date: '每周六',
        time: '14:00-18:00',
        location: '棋牌室',
        participants: 30,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 15,
        title: '生日庆祝会',
        description: '为当月生日的会员举办庆祝活动，增进感情',
        image: '../../public/img/birthday.jpg',
        category: 'social',
        categoryName: '社交',
        date: '每月最后一周',
        time: '15:00-17:00',
        location: '活动大厅',
        participants: 50,
        status: 'upcoming',
        statusText: '即将开始'
      },
      {
        id: 16,
        title: '志愿者服务',
        description: '参与社区志愿服务，传递爱心，回馈社会',
        image: '../../public/img/volunteer.jpg',
        category: 'social',
        categoryName: '社交',
        date: '每周日',
        time: '09:00-12:00',
        location: '社区各处',
        participants: 25,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 更多活动
      {
        id: 17,
        title: '烹饪课堂',
        description: '学习健康烹饪技巧，制作营养美食',
        image: '../../public/img/cooking.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每周三',
        time: '10:00-12:00',
        location: '厨房教室',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 18,
        title: '舞蹈健身班',
        description: '学习广场舞、民族舞，锻炼身体，愉悦心情',
        image: '../../public/img/dance.jpg',
        category: 'health',
        categoryName: '养生',
        date: '每周一、三、五',
        time: '19:00-20:30',
        location: '舞蹈室',
        participants: 40,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 19,
        title: '电影欣赏会',
        description: '观看经典电影，分享观影心得，交流感受',
        image: '../../public/img/movie.jpg',
        category: 'culture',
        categoryName: '文化',
        date: '每周六',
        time: '19:00-21:30',
        location: '影音室',
        participants: 35,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 20,
        title: '园艺插花课',
        description: '学习插花艺术，美化环境，陶冶情操',
        image: '../../public/img/flower.jpg',
        category: 'art',
        categoryName: '艺术',
        date: '每周四',
        time: '14:00-16:00',
        location: '花艺室',
        participants: 18,
        status: 'ongoing',
        statusText: '进行中'
      }
    ]
  },

  onLoad() {
    this.setSafeArea();
    this.filterActivities();
    this.setFeaturedActivities();
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

  // 分类筛选
  onCategoryChange(e: any) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
    this.filterActivities();
  },

  // 筛选活动
  filterActivities() {
    const { activities, currentCategory } = this.data;
    let filtered = activities;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    this.setData({
      filteredActivities: filtered
    });
  },

  // 设置特色推荐活动
  setFeaturedActivities() {
    const featured = [
      {
        id: 21,
        title: '智慧养老体验日',
        description: '体验最新智慧养老科技，感受科技带来的便利',
        image: '../../public/img/smart-tech.jpg',
        badge: '热门'
      },
      {
        id: 22,
        title: '健康体检服务',
        description: '专业健康体检，建立健康档案，关注您的健康',
        image: '../../public/img/health-check.jpg',
        badge: '推荐'
      },
      {
        id: 23,
        title: '智能设备培训',
        description: '学习使用智能设备，享受数字化生活',
        image: '../../public/img/device-training.jpg',
        badge: '新活动'
      }
    ];

    this.setData({
      featuredActivities: featured
    });
  },

  // 点击活动
  onActivityTap(e: any) {
    const activity = e.currentTarget.dataset.activity;
    
    wx.showModal({
      title: activity.title,
      content: `时间：${activity.date} ${activity.time}\n地点：${activity.location}\n\n${activity.description}`,
      confirmText: '立即报名',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          this.registerActivity(activity);
        }
      }
    });
  },

  // 报名活动
  registerActivity(activity: any) {
    wx.showLoading({
      title: '报名中...'
    });

    // 模拟报名过程
    setTimeout(() => {
      wx.hideLoading();
      
      wx.showToast({
        title: '报名成功',
        icon: 'success',
        duration: 2000
      });
    }, 1500);
  }
});
