// homestay-detail.ts

interface Homestay {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  images?: string[];
  rating: string;
  memberPrice: string;
  originalPrice: string;
  discount: string;
  tags: string[];
  features: string[];
}

interface Facility {
  name: string;
  icon: string;
}

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  rating: string;
  time: string;
}

Page({
  data: {
    homestay: null as Homestay | null,
    facilities: [] as Facility[],
    reviews: [] as Review[]
  },

  onLoad(options: any) {
    const homestayId = options.id;
    this.loadHomestayDetail(homestayId);
    this.loadFacilities();
    this.loadReviews(homestayId);
  },

  // 加载民宿详情
  loadHomestayDetail(homestayId: string) {
    // 模拟数据，实际应该从API获取
    const mockHomestays = [
      {
        id: 101,
        name: '江南水乡民宿',
        location: '江苏苏州',
        description: '传统江南建筑风格，临水而居，体验江南水乡的宁静与优雅。提供茶艺体验、园林导览等服务。',
        image: '../../public/img/suzhou-homestay.jpg',
        images: [
          '../../public/img/suzhou-homestay.jpg',
          '../../public/img/suzhou-homestay2.jpg',
          '../../public/img/suzhou-homestay3.jpg'
        ],
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
        images: [
          '../../public/img/moganshan-homestay.jpg',
          '../../public/img/moganshan-homestay2.jpg',
          '../../public/img/moganshan-homestay3.jpg'
        ],
        rating: '4.8',
        memberPrice: '368',
        originalPrice: '498',
        discount: '7.4',
        tags: ['山景', '温泉', '清幽', '有机'],
        features: ['温泉SPA', '山间徒步', '有机餐饮', '免费WiFi']
      },
      {
        id: 103,
        name: '海边度假民宿',
        location: '海南三亚',
        description: '面朝大海，春暖花开。享受阳光沙滩，体验热带风情。提供海景房、海鲜大餐、海上活动等服务。',
        image: '../../public/img/sanya-homestay.jpg',
        images: [
          '../../public/img/sanya-homestay.jpg',
          '../../public/img/sanya-homestay2.jpg',
          '../../public/img/sanya-homestay3.jpg'
        ],
        rating: '4.7',
        memberPrice: '428',
        originalPrice: '588',
        discount: '7.3',
        tags: ['海景', '度假', '热带', '沙滩'],
        features: ['海景房', '海鲜大餐', '海上活动', '免费WiFi']
      },
      {
        id: 104,
        name: '茶园雅居民宿',
        location: '福建武夷山',
        description: '坐落在茶园中的雅致民宿，被茶香环绕。体验茶文化，享受宁静的山间生活。提供茶艺体验、茶园观光等服务。',
        image: '../../public/img/wuyishan-homestay.jpg',
        images: [
          '../../public/img/wuyishan-homestay.jpg',
          '../../public/img/wuyishan-homestay2.jpg',
          '../../public/img/wuyishan-homestay3.jpg'
        ],
        rating: '4.8',
        memberPrice: '328',
        originalPrice: '448',
        discount: '7.3',
        tags: ['茶园', '茶文化', '雅致', '山景'],
        features: ['茶园景观', '茶艺体验', '茶园观光', '免费WiFi']
      },
      {
        id: 105,
        name: '古村落民宿',
        location: '安徽宏村',
        description: '位于世界文化遗产宏村，体验徽派建筑的传统魅力。春季油菜花海，秋季红叶满山，四季皆有美景。',
        image: '../../public/img/hongcun-homestay.jpg',
        images: [
          '../../public/img/hongcun-homestay.jpg',
          '../../public/img/hongcun-homestay2.jpg',
          '../../public/img/hongcun-homestay3.jpg'
        ],
        rating: '4.9',
        memberPrice: '268',
        originalPrice: '368',
        discount: '7.3',
        tags: ['古村落', '徽派', '文化遗产', '四季美景'],
        features: ['传统建筑', '文化体验', '摄影指导', '免费WiFi']
      },
      {
        id: 106,
        name: '温泉度假民宿',
        location: '云南腾冲',
        description: '坐落在火山温泉区，拥有天然温泉资源。享受温泉SPA，体验火山地质奇观。提供温泉房、火山观光等服务。',
        image: '../../public/img/tengchong-homestay.jpg',
        images: [
          '../../public/img/tengchong-homestay.jpg',
          '../../public/img/tengchong-homestay2.jpg',
          '../../public/img/tengchong-homestay3.jpg'
        ],
        rating: '4.8',
        memberPrice: '488',
        originalPrice: '668',
        discount: '7.3',
        tags: ['温泉', '火山', '度假', '地质奇观'],
        features: ['天然温泉', '温泉SPA', '火山观光', '免费WiFi']
      }
    ];
    
    const homestay = mockHomestays.find(h => h.id === parseInt(homestayId));
    if (homestay) {
      this.setData({
        homestay: homestay
      });
    } else {
      wx.showToast({
        title: '民宿不存在',
        icon: 'none',
        duration: 1500
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 加载设施信息
  loadFacilities() {
    const facilities = [
      { name: '免费WiFi', icon: '📶' },
      { name: '空调', icon: '❄️' },
      { name: '热水', icon: '🚿' },
      { name: '停车位', icon: '🅿️' },
      { name: '餐厅', icon: '🍽️' },
      { name: '洗衣', icon: '👕' },
      { name: '行李寄存', icon: '🧳' },
      { name: '接送服务', icon: '🚗' },
      { name: '24小时前台', icon: '🕐' },
      { name: '电梯', icon: '🛗' },
      { name: '健身房', icon: '💪' },
      { name: '游泳池', icon: '🏊' }
    ];
    
    this.setData({
      facilities: facilities
    });
  },

  // 加载用户评价
  loadReviews(homestayId: string) {
    const reviewsMap: { [key: string]: Review[] } = {
      '101': [
        {
          id: 1,
          user: {
            name: '张奶奶',
            avatar: '../../public/img/avatar1.jpg'
          },
          content: '江南水乡民宿真的很美，临水而居的感觉很棒。茶艺体验很有趣，服务也很贴心。',
          rating: '5.0',
          time: '1周前'
        },
        {
          id: 2,
          user: {
            name: '李爷爷',
            avatar: '../../public/img/avatar2.jpg'
          },
          content: '传统江南建筑很有特色，园林导览很专业。早餐也很丰盛，推荐给喜欢传统文化的朋友。',
          rating: '4.8',
          time: '2周前'
        }
      ],
      '102': [
        {
          id: 3,
          user: {
            name: '王阿姨',
            avatar: '../../public/img/avatar3.jpg'
          },
          content: '山间温泉民宿环境很好，空气清新，温泉SPA很舒服。有机餐饮也很健康。',
          rating: '4.9',
          time: '1周前'
        }
      ],
      '103': [
        {
          id: 4,
          user: {
            name: '陈叔叔',
            avatar: '../../public/img/avatar4.jpg'
          },
          content: '海边度假民宿风景很美，海景房视野开阔。海鲜很新鲜，海上活动也很有趣。',
          rating: '4.7',
          time: '1周前'
        }
      ],
      '104': [
        {
          id: 5,
          user: {
            name: '刘奶奶',
            avatar: '../../public/img/avatar5.jpg'
          },
          content: '茶园雅居民宿很有特色，茶艺体验很棒。茶园景色很美，空气也很清新。',
          rating: '4.8',
          time: '2周前'
        }
      ],
      '105': [
        {
          id: 6,
          user: {
            name: '赵爷爷',
            avatar: '../../public/img/avatar6.jpg'
          },
          content: '古村落民宿很美，徽派建筑很有特色。春季油菜花海很壮观，摄影效果很好。',
          rating: '4.9',
          time: '1周前'
        }
      ],
      '106': [
        {
          id: 7,
          user: {
            name: '孙阿姨',
            avatar: '../../public/img/avatar7.jpg'
          },
          content: '温泉度假民宿很棒，天然温泉很舒服。火山观光也很有趣，服务很周到。',
          rating: '4.8',
          time: '1周前'
        }
      ]
    };
    
    const reviews = reviewsMap[homestayId] || [];
    this.setData({
      reviews: reviews
    });
  },

  // 点击图片
  onImageTap(e: any) {
    const image = e.currentTarget.dataset.image;
    const images = e.currentTarget.dataset.images;
    
    wx.previewImage({
      current: image,
      urls: images
    });
  },

  // 预订民宿
  onBookHomestay() {
    const homestay = this.data.homestay;
    if (homestay) {
      wx.showModal({
        title: '预订确认',
        content: `确定要预订"${homestay.name}"吗？\n会员价：¥${homestay.memberPrice}/晚`,
        success: (res) => {
          if (res.confirm) {
            wx.showToast({
              title: '预订成功',
              icon: 'success',
              duration: 2000
            });
          }
        }
      });
    }
  }
});
