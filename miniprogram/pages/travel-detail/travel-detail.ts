// travel-detail.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    destination: {
      id: 0,
      name: '',
      location: '',
      description: '',
      images: [],
      rating: '',
      startPrice: '',
      discount: '',
      tags: [],
      features: [],
      schedule: []
    }
  },

  onLoad(options: any) {
    this.setSafeArea();
    this.loadDestinationData(options.id);
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

  // 加载目的地数据
  loadDestinationData(id: string) {
    const destinations = [
      {
        id: 1,
        name: '三亚海棠湾',
        location: '海南三亚',
        description: '热带海滨度假胜地，全年温暖如春，适合老年人避寒养生。拥有优质的海滩、温泉和丰富的海鲜资源。这里空气清新，负氧离子含量高，是天然的氧吧。',
        images: [
          '../../public/img/sanya1.jpg',
          '../../public/img/sanya2.jpg',
          '../../public/img/sanya3.jpg'
        ],
        rating: '4.8',
        startPrice: '2888',
        discount: '9.5',
        tags: ['海滨', '温泉', '海鲜', '避寒'],
        features: ['海景房', '温泉SPA', '海鲜大餐', '沙滩漫步', '健康体检', '文化讲座'],
        schedule: [
          { day: 1, title: '抵达三亚', description: '机场接机，入住海景酒店，熟悉环境' },
          { day: 2, title: '海滩漫步', description: '海棠湾海滩漫步，享受阳光沙滩' },
          { day: 3, title: '温泉养生', description: '体验温泉SPA，放松身心' },
          { day: 4, title: '海鲜大餐', description: '品尝当地特色海鲜，了解饮食文化' },
          { day: 5, title: '健康体检', description: '专业健康体检，制定养生计划' },
          { day: 6, title: '文化讲座', description: '参加健康养生文化讲座' },
          { day: 7, title: '自由活动', description: '自由安排，享受度假时光' }
        ]
      },
      {
        id: 2,
        name: '桂林阳朔',
        location: '广西桂林',
        description: '山水甲天下，田园风光秀丽，空气清新，是养生的绝佳选择。可以体验竹筏漂流、田园采摘等活动。这里山清水秀，民风淳朴，是体验慢生活的好地方。',
        images: [
          '../../public/img/guilin1.jpg',
          '../../public/img/guilin2.jpg',
          '../../public/img/guilin3.jpg'
        ],
        rating: '4.7',
        startPrice: '1888',
        discount: '9.0',
        tags: ['山水', '田园', '养生', '文化'],
        features: ['山景房', '竹筏漂流', '田园采摘', '文化体验', '太极晨练', '茶艺品鉴'],
        schedule: [
          { day: 1, title: '抵达桂林', description: '机场接机，入住山景酒店' },
          { day: 2, title: '漓江游船', description: '乘船游览漓江，欣赏山水风光' },
          { day: 3, title: '阳朔西街', description: '漫步阳朔西街，体验当地文化' },
          { day: 4, title: '竹筏漂流', description: '体验遇龙河竹筏漂流' },
          { day: 5, title: '田园采摘', description: '到果园采摘新鲜水果' },
          { day: 6, title: '太极晨练', description: '学习太极拳，强身健体' },
          { day: 7, title: '茶艺品鉴', description: '学习茶艺，品鉴当地名茶' }
        ]
      },
      {
        id: 3,
        name: '杭州西湖',
        location: '浙江杭州',
        description: '人间天堂，文化底蕴深厚，环境优美，适合文化养老。可以漫步苏堤、品茶赏景、体验江南文化。这里历史悠久，文化氛围浓厚，是修身养性的好地方。',
        images: [
          '../../public/img/hangzhou1.jpg',
          '../../public/img/hangzhou2.jpg',
          '../../public/img/hangzhou3.jpg'
        ],
        rating: '4.9',
        startPrice: '2288',
        discount: '9.2',
        tags: ['文化', '园林', '茶文化', '江南'],
        features: ['湖景房', '茶艺体验', '园林漫步', '文化讲座', '书法练习', '古琴欣赏'],
        schedule: [
          { day: 1, title: '抵达杭州', description: '机场接机，入住湖景酒店' },
          { day: 2, title: '西湖漫步', description: '漫步苏堤，欣赏西湖美景' },
          { day: 3, title: '茶艺体验', description: '学习龙井茶艺，品鉴名茶' },
          { day: 4, title: '园林游览', description: '游览古典园林，感受江南文化' },
          { day: 5, title: '书法练习', description: '学习书法，修身养性' },
          { day: 6, title: '古琴欣赏', description: '欣赏古琴演奏，陶冶情操' },
          { day: 7, title: '文化讲座', description: '参加江南文化讲座' }
        ]
      },
      {
        id: 4,
        name: '青岛崂山',
        location: '山东青岛',
        description: '海滨城市，气候宜人，有山有海，是避暑的好去处。可以品尝海鲜、登山观海、体验道教文化。这里山海相依，气候宜人，是避暑养生的理想选择。',
        images: [
          '../../public/img/qingdao1.jpg',
          '../../public/img/qingdao2.jpg',
          '../../public/img/qingdao3.jpg'
        ],
        rating: '4.6',
        startPrice: '1988',
        discount: '9.3',
        tags: ['海滨', '避暑', '道教', '海鲜'],
        features: ['海景房', '登山观海', '海鲜大餐', '道教文化', '啤酒节', '海滨浴场'],
        schedule: [
          { day: 1, title: '抵达青岛', description: '机场接机，入住海景酒店' },
          { day: 2, title: '崂山登山', description: '登崂山观海，体验道教文化' },
          { day: 3, title: '海鲜大餐', description: '品尝青岛特色海鲜' },
          { day: 4, title: '海滨浴场', description: '享受海滨浴场，避暑纳凉' },
          { day: 5, title: '啤酒节', description: '参加青岛啤酒节活动' },
          { day: 6, title: '道教文化', description: '学习道教养生文化' },
          { day: 7, title: '自由活动', description: '自由安排，享受海滨时光' }
        ]
      },
      {
        id: 5,
        name: '承德避暑山庄',
        location: '河北承德',
        description: '皇家园林，夏季凉爽，是避暑的绝佳选择。可以体验皇家文化、园林艺术、避暑养生。这里曾是清朝皇帝的避暑胜地，园林精美，文化底蕴深厚。',
        images: [
          '../../public/img/chengde1.jpg',
          '../../public/img/chengde2.jpg',
          '../../public/img/chengde3.jpg'
        ],
        rating: '4.5',
        startPrice: '1688',
        discount: '9.1',
        tags: ['避暑', '皇家', '园林', '文化'],
        features: ['园林房', '皇家体验', '避暑养生', '文化讲座', '古建筑', '皇家美食'],
        schedule: [
          { day: 1, title: '抵达承德', description: '机场接机，入住园林酒店' },
          { day: 2, title: '避暑山庄', description: '游览避暑山庄，体验皇家园林' },
          { day: 3, title: '皇家文化', description: '学习清朝皇家文化历史' },
          { day: 4, title: '园林艺术', description: '欣赏古典园林艺术' },
          { day: 5, title: '古建筑', description: '参观古建筑群' },
          { day: 6, title: '皇家美食', description: '品尝皇家特色美食' },
          { day: 7, title: '文化讲座', description: '参加历史文化讲座' }
        ]
      },
      {
        id: 6,
        name: '九寨沟',
        location: '四川阿坝',
        description: '童话世界，自然风光绝美，空气清新，是养生的天堂。可以欣赏五彩池、原始森林、藏族文化。这里是大自然的杰作，空气纯净，是天然的养生圣地。',
        images: [
          '../../public/img/jiuzhaigou1.jpg',
          '../../public/img/jiuzhaigou2.jpg',
          '../../public/img/jiuzhaigou3.jpg'
        ],
        rating: '4.9',
        startPrice: '2588',
        discount: '9.4',
        tags: ['自然', '养生', '藏族', '森林'],
        features: ['山景房', '森林漫步', '藏族文化', '自然养生', '摄影采风', '生态体验'],
        schedule: [
          { day: 1, title: '抵达九寨沟', description: '机场接机，入住山景酒店' },
          { day: 2, title: '五彩池', description: '游览五彩池，欣赏自然奇观' },
          { day: 3, title: '森林漫步', description: '原始森林漫步，呼吸新鲜空气' },
          { day: 4, title: '藏族文化', description: '体验藏族文化，学习民族舞蹈' },
          { day: 5, title: '摄影采风', description: '专业摄影指导，记录美好时光' },
          { day: 6, title: '生态体验', description: '参与生态保护活动' },
          { day: 7, title: '自然养生', description: '学习自然养生方法' }
        ]
      },
      {
        id: 7,
        name: '厦门鼓浪屿',
        location: '福建厦门',
        description: '海上花园，气候宜人，文化氛围浓厚。可以漫步鼓浪屿、品尝闽南美食、体验海岛文化。这里四季如春，文化多元，是体验慢生活的好地方。',
        images: [
          '../../public/img/xiamen1.jpg',
          '../../public/img/xiamen2.jpg',
          '../../public/img/xiamen3.jpg'
        ],
        rating: '4.7',
        startPrice: '2188',
        discount: '9.2',
        tags: ['海岛', '文化', '美食', '花园'],
        features: ['海景房', '海岛漫步', '闽南美食', '文化体验', '音乐欣赏', '手工艺'],
        schedule: [
          { day: 1, title: '抵达厦门', description: '机场接机，入住海景酒店' },
          { day: 2, title: '鼓浪屿', description: '漫步鼓浪屿，欣赏建筑艺术' },
          { day: 3, title: '闽南美食', description: '品尝闽南特色美食' },
          { day: 4, title: '文化体验', description: '体验闽南文化传统' },
          { day: 5, title: '音乐欣赏', description: '欣赏鼓浪屿音乐文化' },
          { day: 6, title: '手工艺', description: '学习传统手工艺制作' },
          { day: 7, title: '自由活动', description: '自由安排，享受海岛时光' }
        ]
      },
      {
        id: 8,
        name: '大连金石滩',
        location: '辽宁大连',
        description: '北方海滨，夏季凉爽，是避暑的好去处。可以享受海滨浴场、品尝海鲜、体验北方文化。这里海风习习，气候宜人，是北方避暑的绝佳选择。',
        images: [
          '../../public/img/dalian1.jpg',
          '../../public/img/dalian2.jpg',
          '../../public/img/dalian3.jpg'
        ],
        rating: '4.6',
        startPrice: '1788',
        discount: '9.0',
        tags: ['海滨', '避暑', '海鲜', '北方'],
        features: ['海景房', '海滨浴场', '海鲜大餐', '北方文化', '海洋馆', '渔村体验'],
        schedule: [
          { day: 1, title: '抵达大连', description: '机场接机，入住海景酒店' },
          { day: 2, title: '金石滩', description: '游览金石滩，享受海滨风光' },
          { day: 3, title: '海滨浴场', description: '海滨浴场游泳，避暑纳凉' },
          { day: 4, title: '海鲜大餐', description: '品尝大连特色海鲜' },
          { day: 5, title: '海洋馆', description: '参观海洋馆，了解海洋生物' },
          { day: 6, title: '渔村体验', description: '体验渔村生活，学习捕鱼' },
          { day: 7, title: '北方文化', description: '体验北方文化特色' }
        ]
      },
      {
        id: 9,
        name: '黄山',
        location: '安徽黄山',
        description: '天下第一奇山，空气清新，是养生的绝佳选择。可以登山观景、体验徽州文化、享受山间温泉。这里山峦叠嶂，云海奇观，是修身养性的好地方。',
        images: [
          '../../public/img/huangshan1.jpg',
          '../../public/img/huangshan2.jpg',
          '../../public/img/huangshan3.jpg'
        ],
        rating: '4.8',
        startPrice: '2088',
        discount: '9.3',
        tags: ['登山', '养生', '徽州', '温泉'],
        features: ['山景房', '登山观景', '徽州文化', '山间温泉', '云海观赏', '古村落'],
        schedule: [
          { day: 1, title: '抵达黄山', description: '机场接机，入住山景酒店' },
          { day: 2, title: '登山观景', description: '登黄山，欣赏奇松怪石' },
          { day: 3, title: '云海观赏', description: '观赏黄山云海奇观' },
          { day: 4, title: '徽州文化', description: '体验徽州文化传统' },
          { day: 5, title: '山间温泉', description: '享受山间温泉，放松身心' },
          { day: 6, title: '古村落', description: '游览徽州古村落' },
          { day: 7, title: '自由活动', description: '自由安排，享受山间时光' }
        ]
      },
      {
        id: 10,
        name: '丽江古城',
        location: '云南丽江',
        description: '古城韵味，纳西文化，气候宜人，是文化养老的理想选择。可以漫步古城、体验纳西文化、享受慢生活。这里古色古香，文化多元，是体验慢生活的好地方。',
        images: [
          '../../public/img/lijiang1.jpg',
          '../../public/img/lijiang2.jpg',
          '../../public/img/lijiang3.jpg'
        ],
        rating: '4.7',
        startPrice: '1988',
        discount: '9.1',
        tags: ['古城', '纳西', '文化', '慢生活'],
        features: ['古城房', '文化体验', '慢生活', '纳西文化', '音乐节', '手工艺'],
        schedule: [
          { day: 1, title: '抵达丽江', description: '机场接机，入住古城酒店' },
          { day: 2, title: '古城漫步', description: '漫步丽江古城，感受古韵' },
          { day: 3, title: '纳西文化', description: '体验纳西族文化传统' },
          { day: 4, title: '慢生活', description: '体验慢生活节奏' },
          { day: 5, title: '音乐节', description: '参加纳西音乐节活动' },
          { day: 6, title: '手工艺', description: '学习传统手工艺制作' },
          { day: 7, title: '自由活动', description: '自由安排，享受古城时光' }
        ]
      }
    ];

    const destination = destinations.find(item => item.id === parseInt(id));
    if (destination) {
      this.setData({
        destination: destination
      });
    } else {
      wx.showToast({
        title: '目的地不存在',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 立即预订
  onBookNow() {
    const { destination } = this.data;
    
    wx.showModal({
      title: '确认预订',
      content: `确认预订 ${destination.name} 旅居服务？\n起价：¥${destination.startPrice}/人/月`,
      success: (res) => {
        if (res.confirm) {
          this.processBooking();
        }
      }
    });
  },

  // 处理预订
  processBooking() {
    wx.showLoading({
      title: '处理中...'
    });

    // 模拟预订过程
    setTimeout(() => {
      wx.hideLoading();
      
      wx.showModal({
        title: '预订成功',
        content: '您的旅居预订已提交，客服将在24小时内联系您确认详细信息。',
        showCancel: false,
        success: () => {
          // 可以跳转到订单页面或返回列表
          wx.navigateBack();
        }
      });
    }, 2000);
  }
});
