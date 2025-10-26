// leisure-care.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    currentCategory: 'all',
    totalActivities: 24,
    activeMembers: 128,
    satisfactionRate: 96,
    filteredActivities: [],
    featuredActivities: [],
    activities: [
      // 音乐类活动
      {
        id: 1,
        title: 'KTV欢唱会',
        description: '专业KTV包间，点歌系统齐全，与朋友们一起欢唱经典老歌',
        image: '../../public/img/ktv.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周三、六',
        time: '14:00-18:00',
        location: 'KTV包间',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 2,
        title: '经典老歌合唱团',
        description: '学习演唱经典老歌，组建合唱团，参加演出活动',
        image: '../../public/img/chorus.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周二、四',
        time: '15:00-17:00',
        location: '音乐教室',
        participants: 25,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 3,
        title: '乐器演奏班',
        description: '学习二胡、古筝、口琴等传统乐器，陶冶情操',
        image: '../../public/img/instrument.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周一、三',
        time: '10:00-12:00',
        location: '乐器教室',
        participants: 15,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 4,
        title: '音乐欣赏会',
        description: '欣赏经典音乐作品，了解音乐历史，提升音乐素养',
        image: '../../public/img/music-appreciation.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周五',
        time: '19:00-21:00',
        location: '音乐厅',
        participants: 30,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 舞蹈类活动
      {
        id: 5,
        title: '广场舞健身班',
        description: '学习各种广场舞，强身健体，结交舞友',
        image: '../../public/img/square-dance.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每日早晨',
        time: '07:00-08:30',
        location: '中心广场',
        participants: 50,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 6,
        title: '民族舞学习班',
        description: '学习民族舞蹈，体验不同民族文化，锻炼身体协调性',
        image: '../../public/img/folk-dance.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每周二、四',
        time: '15:00-17:00',
        location: '舞蹈室',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 7,
        title: '交谊舞培训班',
        description: '学习华尔兹、探戈等交谊舞，提升气质，增进社交',
        image: '../../public/img/ballroom-dance.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每周三、六',
        time: '19:00-21:00',
        location: '舞厅',
        participants: 24,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 8,
        title: '健身操班',
        description: '学习健身操，增强体质，保持活力',
        image: '../../public/img/aerobics.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每周一、三、五',
        time: '16:00-17:30',
        location: '健身房',
        participants: 35,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 棋牌类活动
      {
        id: 9,
        title: '麻将友谊赛',
        description: '组织麻将比赛，增进友谊，锻炼思维',
        image: '../../public/img/mahjong.jpg',
        category: 'games',
        categoryName: '棋牌',
        date: '每周一、三、五',
        time: '14:00-18:00',
        location: '棋牌室',
        participants: 32,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 10,
        title: '象棋围棋班',
        description: '学习象棋、围棋，锻炼思维，培养耐心',
        image: '../../public/img/chess.jpg',
        category: 'games',
        categoryName: '棋牌',
        date: '每周二、四',
        time: '10:00-12:00',
        location: '棋牌室',
        participants: 18,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 11,
        title: '扑克牌游戏',
        description: '玩各种扑克牌游戏，如升级、斗地主等，增进友谊',
        image: '../../public/img/poker.jpg',
        category: 'games',
        categoryName: '棋牌',
        date: '每周六、日',
        time: '15:00-18:00',
        location: '棋牌室',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 12,
        title: '桥牌学习班',
        description: '学习桥牌技巧，参加桥牌比赛，锻炼逻辑思维',
        image: '../../public/img/bridge.jpg',
        category: 'games',
        categoryName: '棋牌',
        date: '每周四',
        time: '14:00-17:00',
        location: '桥牌室',
        participants: 16,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 运动类活动
      {
        id: 13,
        title: '太极拳晨练',
        description: '学习太极拳，强身健体，修身养性',
        image: '../../public/img/taichi.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每日早晨',
        time: '07:00-08:00',
        location: '中心广场',
        participants: 40,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 14,
        title: '门球运动',
        description: '学习门球运动，锻炼身体，增进友谊',
        image: '../../public/img/gateball.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每周二、四、六',
        time: '09:00-11:00',
        location: '门球场',
        participants: 24,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 15,
        title: '乒乓球比赛',
        description: '组织乒乓球比赛，锻炼反应能力，保持活力',
        image: '../../public/img/pingpong.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每周一、三、五',
        time: '16:00-18:00',
        location: '乒乓球室',
        participants: 28,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 16,
        title: '台球俱乐部',
        description: '学习台球技巧，参加台球比赛，锻炼专注力',
        image: '../../public/img/billiards.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每周二、四、六',
        time: '14:00-17:00',
        location: '台球室',
        participants: 20,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 17,
        title: '羽毛球健身',
        description: '打羽毛球锻炼身体，提高心肺功能，增强体质',
        image: '../../public/img/badminton.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每周一、三、五',
        time: '17:00-19:00',
        location: '羽毛球馆',
        participants: 32,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 18,
        title: '健身器材使用',
        description: '学习使用各种健身器材，科学锻炼身体',
        image: '../../public/img/gym.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每日',
        time: '08:00-20:00',
        location: '健身房',
        participants: 45,
        status: 'ongoing',
        statusText: '进行中'
      },
      
      // 其他娱乐活动
      {
        id: 19,
        title: '电影欣赏会',
        description: '观看经典电影，分享观影心得，增进交流',
        image: '../../public/img/movie.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周六',
        time: '19:00-21:30',
        location: '影音室',
        participants: 35,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 20,
        title: '茶话会',
        description: '品茶聊天，分享生活感悟，增进友谊',
        image: '../../public/img/tea-party.jpg',
        category: 'games',
        categoryName: '棋牌',
        date: '每周五',
        time: '15:00-17:00',
        location: '茶艺室',
        participants: 16,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 21,
        title: '手工制作班',
        description: '学习手工制作，如编织、剪纸等，培养创造力',
        image: '../../public/img/handicraft.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每周三',
        time: '14:00-16:00',
        location: '手工坊',
        participants: 12,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 22,
        title: '园艺活动',
        description: '种植花草，美化环境，享受园艺乐趣',
        image: '../../public/img/gardening.jpg',
        category: 'sports',
        categoryName: '运动',
        date: '每周二、四',
        time: '09:00-11:00',
        location: '社区花园',
        participants: 18,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 23,
        title: '书法练习班',
        description: '学习书法艺术，修身养性，陶冶情操',
        image: '../../public/img/calligraphy.jpg',
        category: 'music',
        categoryName: '音乐',
        date: '每周一、三',
        time: '10:00-12:00',
        location: '书画室',
        participants: 15,
        status: 'ongoing',
        statusText: '进行中'
      },
      {
        id: 24,
        title: '摄影采风',
        description: '学习摄影技巧，外出采风，记录美好生活',
        image: '../../public/img/photography.jpg',
        category: 'dance',
        categoryName: '舞蹈',
        date: '每月第一周',
        time: '08:00-17:00',
        location: '各景点',
        participants: 20,
        status: 'upcoming',
        statusText: '即将开始'
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
        id: 25,
        title: 'KTV欢唱会',
        description: '专业KTV包间，点歌系统齐全，与朋友们一起欢唱经典老歌',
        image: '../../public/img/ktv-featured.jpg',
        badge: '热门'
      },
      {
        id: 26,
        title: '麻将友谊赛',
        description: '组织麻将比赛，增进友谊，锻炼思维',
        image: '../../public/img/mahjong-featured.jpg',
        badge: '推荐'
      },
      {
        id: 27,
        title: '广场舞健身班',
        description: '学习各种广场舞，强身健体，结交舞友',
        image: '../../public/img/dance-featured.jpg',
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
