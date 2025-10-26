// travel-destinations.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    searchKeyword: '',
    currentFilter: 'all',
    filteredDestinations: [],
    destinations: [
      {
        id: 1,
        name: '三亚海棠湾',
        location: '海南三亚',
        description: '热带海滨度假胜地，全年温暖如春，适合老年人避寒养生。拥有优质的海滩、温泉和丰富的海鲜资源。',
        image: '../../public/img/sanya.jpg',
        rating: '4.8',
        startPrice: '2888',
        discount: '9.5',
        tags: ['海滨', '温泉', '海鲜', '避寒'],
        region: 'south',
        features: ['海景房', '温泉SPA', '海鲜大餐', '沙滩漫步']
      },
      {
        id: 2,
        name: '桂林阳朔',
        location: '广西桂林',
        description: '山水甲天下，田园风光秀丽，空气清新，是养生的绝佳选择。可以体验竹筏漂流、田园采摘等活动。',
        image: '../../public/img/guilin.jpg',
        rating: '4.7',
        startPrice: '1888',
        discount: '9.0',
        tags: ['山水', '田园', '养生', '文化'],
        region: 'south',
        features: ['山景房', '竹筏漂流', '田园采摘', '文化体验']
      },
      {
        id: 3,
        name: '杭州西湖',
        location: '浙江杭州',
        description: '人间天堂，文化底蕴深厚，环境优美，适合文化养老。可以漫步苏堤、品茶赏景、体验江南文化。',
        image: '../../public/img/hangzhou.jpg',
        rating: '4.9',
        startPrice: '2288',
        discount: '9.2',
        tags: ['文化', '园林', '茶文化', '江南'],
        region: 'south',
        features: ['湖景房', '茶艺体验', '园林漫步', '文化讲座']
      },
      {
        id: 4,
        name: '青岛崂山',
        location: '山东青岛',
        description: '海滨城市，气候宜人，有山有海，是避暑的好去处。可以品尝海鲜、登山观海、体验道教文化。',
        image: '../../public/img/qingdao.jpg',
        rating: '4.6',
        startPrice: '1988',
        discount: '9.3',
        tags: ['海滨', '避暑', '道教', '海鲜'],
        region: 'coast',
        features: ['海景房', '登山观海', '海鲜大餐', '道教文化']
      },
      {
        id: 5,
        name: '承德避暑山庄',
        location: '河北承德',
        description: '皇家园林，夏季凉爽，是避暑的绝佳选择。可以体验皇家文化、园林艺术、避暑养生。',
        image: '../../public/img/chengde.jpg',
        rating: '4.5',
        startPrice: '1688',
        discount: '9.1',
        tags: ['避暑', '皇家', '园林', '文化'],
        region: 'north',
        features: ['园林房', '皇家体验', '避暑养生', '文化讲座']
      },
      {
        id: 6,
        name: '九寨沟',
        location: '四川阿坝',
        description: '童话世界，自然风光绝美，空气清新，是养生的天堂。可以欣赏五彩池、原始森林、藏族文化。',
        image: '../../public/img/jiuzhaigou.jpg',
        rating: '4.9',
        startPrice: '2588',
        discount: '9.4',
        tags: ['自然', '养生', '藏族', '森林'],
        region: 'mountain',
        features: ['山景房', '森林漫步', '藏族文化', '自然养生']
      },
      {
        id: 7,
        name: '厦门鼓浪屿',
        location: '福建厦门',
        description: '海上花园，气候宜人，文化氛围浓厚。可以漫步鼓浪屿、品尝闽南美食、体验海岛文化。',
        image: '../../public/img/xiamen.jpg',
        rating: '4.7',
        startPrice: '2188',
        discount: '9.2',
        tags: ['海岛', '文化', '美食', '花园'],
        region: 'coast',
        features: ['海景房', '海岛漫步', '闽南美食', '文化体验']
      },
      {
        id: 8,
        name: '大连金石滩',
        location: '辽宁大连',
        description: '北方海滨，夏季凉爽，是避暑的好去处。可以享受海滨浴场、品尝海鲜、体验北方文化。',
        image: '../../public/img/dalian.jpg',
        rating: '4.6',
        startPrice: '1788',
        discount: '9.0',
        tags: ['海滨', '避暑', '海鲜', '北方'],
        region: 'coast',
        features: ['海景房', '海滨浴场', '海鲜大餐', '北方文化']
      },
      {
        id: 9,
        name: '黄山',
        location: '安徽黄山',
        description: '天下第一奇山，空气清新，是养生的绝佳选择。可以登山观景、体验徽州文化、享受山间温泉。',
        image: '../../public/img/huangshan.jpg',
        rating: '4.8',
        startPrice: '2088',
        discount: '9.3',
        tags: ['登山', '养生', '徽州', '温泉'],
        region: 'mountain',
        features: ['山景房', '登山观景', '徽州文化', '山间温泉']
      },
      {
        id: 10,
        name: '丽江古城',
        location: '云南丽江',
        description: '古城韵味，纳西文化，气候宜人，是文化养老的理想选择。可以漫步古城、体验纳西文化、享受慢生活。',
        image: '../../public/img/lijiang.jpg',
        rating: '4.7',
        startPrice: '1988',
        discount: '9.1',
        tags: ['古城', '纳西', '文化', '慢生活'],
        region: 'south',
        features: ['古城房', '文化体验', '慢生活', '纳西文化']
      }
    ]
  },

  onLoad() {
    this.setSafeArea();
    this.filterDestinations();
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

  // 搜索输入
  onSearchInput(e: any) {
    const keyword = e.detail.value;
    this.setData({
      searchKeyword: keyword
    });
    this.filterDestinations();
  },

  // 筛选条件变化
  onFilterChange(e: any) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter
    });
    this.filterDestinations();
  },

  // 筛选目的地
  filterDestinations() {
    const { destinations, searchKeyword, currentFilter } = this.data;
    let filtered = destinations;

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter(item => 
        item.name.includes(searchKeyword) || 
        item.location.includes(searchKeyword) ||
        item.description.includes(searchKeyword) ||
        item.tags.some(tag => tag.includes(searchKeyword))
      );
    }

    // 按地区筛选
    if (currentFilter !== 'all') {
      filtered = filtered.filter(item => item.region === currentFilter);
    }

    this.setData({
      filteredDestinations: filtered
    });
  },

  // 点击目的地
  onDestinationTap(e: any) {
    const destination = e.currentTarget.dataset.destination;
    wx.navigateTo({
      url: `/pages/travel-detail/travel-detail?id=${destination.id}`
    });
  }
});
