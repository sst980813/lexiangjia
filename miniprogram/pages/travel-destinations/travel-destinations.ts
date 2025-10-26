// travel-destinations.ts

interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: string;
  startPrice: string;
  discount: string;
  tags: string[];
  region: string;
  features: string[];
}

interface Homestay {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: string;
  memberPrice: string;
  originalPrice: string;
  discount: string;
  tags: string[];
  features: string[];
}

Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    searchKeyword: '',
    currentFilter: 'homestay',
    filteredDestinations: [],
    filteredHomestays: [],
    homestays: [
      {
        id: 101,
        name: '江南水乡民宿',
        location: '江苏苏州',
        description: '传统江南建筑风格，临水而居，体验江南水乡的宁静与优雅。提供茶艺体验、园林导览等服务。',
        image: '../../public/img/suzhou-homestay.jpg',
        rating: '4.9',
        memberPrice: '288',
        originalPrice: '388',
        discount: '7.4',
        tags: ['江南', '水乡', '传统', '茶艺'],
        features: ['临水房', '茶艺体验', '园林导览', '传统早餐']
      },
      {
        id: 102,
        name: '山间温泉民宿',
        location: '浙江莫干山',
        description: '山间清幽，天然温泉，享受山林间的宁静时光。提供温泉SPA、山间徒步、有机餐饮等服务。',
        image: '../../public/img/moganshan-homestay.jpg',
        rating: '4.8',
        memberPrice: '398',
        originalPrice: '528',
        discount: '7.5',
        tags: ['温泉', '山间', '有机', 'SPA'],
        features: ['温泉房', 'SPA服务', '山间徒步', '有机餐饮']
      },
      {
        id: 103,
        name: '海边度假民宿',
        location: '福建厦门',
        description: '面朝大海，春暖花开，享受海风轻抚的惬意时光。提供海鲜大餐、海边漫步、日出观赏等服务。',
        image: '../../public/img/xiamen-homestay.jpg',
        rating: '4.7',
        memberPrice: '328',
        originalPrice: '428',
        discount: '7.7',
        tags: ['海景', '度假', '海鲜', '日出'],
        features: ['海景房', '海鲜大餐', '海边漫步', '日出观赏']
      },
      {
        id: 104,
        name: '古城文化民宿',
        location: '云南丽江',
        description: '纳西传统建筑，古城韵味浓厚，体验慢生活的美好。提供纳西文化体验、古城导览、手工艺品制作等服务。',
        image: '../../public/img/lijiang-homestay.jpg',
        rating: '4.8',
        memberPrice: '268',
        originalPrice: '358',
        discount: '7.5',
        tags: ['古城', '纳西', '文化', '手工艺'],
        features: ['古城房', '文化体验', '古城导览', '手工艺制作']
      },
      {
        id: 105,
        name: '田园风光民宿',
        location: '江西婺源',
        description: '田园诗画，油菜花海，享受乡村的宁静与美好。提供田园采摘、农家美食、摄影服务等活动。',
        image: '../../public/img/wuyuan-homestay.jpg',
        rating: '4.6',
        memberPrice: '228',
        originalPrice: '308',
        discount: '7.4',
        tags: ['田园', '油菜花', '农家', '摄影'],
        features: ['田园房', '田园采摘', '农家美食', '摄影服务']
      },
      {
        id: 106,
        name: '竹林雅居民宿',
        location: '四川青城山',
        description: '竹林深处，清幽雅致，体验道家的养生之道。提供太极教学、竹林漫步、养生茶饮等服务。',
        image: '../../public/img/qingcheng-homestay.jpg',
        rating: '4.9',
        memberPrice: '358',
        originalPrice: '468',
        discount: '7.6',
        tags: ['竹林', '道家', '养生', '太极'],
        features: ['竹林房', '太极教学', '竹林漫步', '养生茶饮']
      }
    ],
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
    this.filterHomestays();
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
    this.filterHomestays();
  },

  // 筛选条件变化
  onFilterChange(e: any) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter
    });
    this.filterDestinations();
    this.filterHomestays();
  },

  // 筛选目的地
  filterDestinations() {
    const { destinations, searchKeyword, currentFilter } = this.data;
    let filtered: Destination[] = destinations;

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter((item: Destination) => 
        item.name.includes(searchKeyword) || 
        item.location.includes(searchKeyword) ||
        item.description.includes(searchKeyword) ||
        item.tags.some(tag => tag.includes(searchKeyword))
      );
    }

    // 只在选择精选目的地时显示
    if (currentFilter !== 'destination') {
      filtered = [];
    }

    this.setData({
      filteredDestinations: filtered as any
    });
  },

  // 筛选民宿
  filterHomestays() {
    const { homestays, searchKeyword, currentFilter } = this.data;
    let filtered: Homestay[] = homestays;

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter((item: Homestay) => 
        item.name.includes(searchKeyword) || 
        item.location.includes(searchKeyword) ||
        item.description.includes(searchKeyword) ||
        item.tags.some(tag => tag.includes(searchKeyword))
      );
    }

    // 只在选择会员民宿时显示
    if (currentFilter !== 'homestay') {
      filtered = [];
    }

    this.setData({
      filteredHomestays: filtered as any
    });
  },

  // 点击目的地
  onDestinationTap(e: any) {
    const destination = e.currentTarget.dataset.destination;
    wx.navigateTo({
      url: `/pages/travel-detail/travel-detail?id=${destination.id}`
    });
  },

  // 点击民宿
  onHomestayTap(e: any) {
    const homestay = e.currentTarget.dataset.homestay;
    wx.navigateTo({
      url: `/pages/homestay-detail/homestay-detail?id=${homestay.id}`
    });
  }
});
