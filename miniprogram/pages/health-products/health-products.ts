// health-products.ts

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  unit: string;
  discount: string;
  category: string;
  tags: string[];
  stock: number;
  sales: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface PageData {
  safeAreaClass: string;
  safeAreaStyle: string;
  searchKeyword: string;
  currentFilter: string;
  filteredProducts: Product[];
  products: Product[];
}

Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    searchKeyword: '',
    currentFilter: 'all',
    filteredProducts: [],
    products: [
      // 智能产品类
      {
        id: 1,
        name: '智能血压计',
        description: 'AI智能分析，蓝牙连接手机，数据云端同步',
        image: '../../public/img/smart-bp.jpg',
        price: '399',
        unit: '台',
        discount: '9.2',
        category: 'smart',
        tags: ['智能', '血压', 'AI'],
        stock: 25,
        sales: 320
      },
      {
        id: 2,
        name: '智能血糖仪',
        description: '无痛采血，智能提醒，健康数据管理',
        image: '../../public/img/smart-glucose.jpg',
        price: '299',
        unit: '台',
        discount: '9.0',
        category: 'smart',
        tags: ['智能', '血糖', '无痛'],
        stock: 30,
        sales: 280
      },
      {
        id: 3,
        name: '智能手环',
        description: '24小时健康监测，睡眠分析，运动追踪',
        image: '../../public/img/smart-band.jpg',
        price: '199',
        unit: '个',
        discount: '8.8',
        category: 'smart',
        tags: ['智能', '监测', '运动'],
        stock: 50,
        sales: 450
      },
      {
        id: 4,
        name: '智能按摩椅',
        description: 'AI按摩程序，语音控制，全身智能按摩',
        image: '../../public/img/smart-massage.jpg',
        price: '3999',
        unit: '台',
        discount: '8.5',
        category: 'smart',
        tags: ['智能', '按摩', 'AI'],
        stock: 10,
        sales: 85
      },
      {
        id: 5,
        name: '智能药盒',
        description: '定时提醒服药，智能分装，家人远程监控',
        image: '../../public/img/smart-pillbox.jpg',
        price: '158',
        unit: '个',
        discount: '9.5',
        category: 'smart',
        tags: ['智能', '提醒', '监控'],
        stock: 40,
        sales: 200
      },

      // 康养保健类
      {
        id: 6,
        name: '深海鱼油软胶囊',
        description: '富含Omega-3，保护心血管健康，提高免疫力',
        image: '../../public/img/fish-oil.jpg',
        price: '128',
        unit: '瓶',
        discount: '9.5',
        category: 'health',
        tags: ['保健品', '心血管', '免疫力'],
        stock: 50,
        sales: 1200
      },
      {
        id: 7,
        name: '钙片维生素D',
        description: '强健骨骼，预防骨质疏松，适合中老年人',
        image: '../../public/img/calcium.jpg',
        price: '89',
        unit: '瓶',
        discount: '9.0',
        category: 'health',
        tags: ['保健品', '骨骼', '维生素'],
        stock: 80,
        sales: 980
      },
      {
        id: 8,
        name: '灵芝孢子粉',
        description: '破壁灵芝孢子粉，增强免疫力，抗肿瘤',
        image: '../../public/img/lingzhi.jpg',
        price: '268',
        unit: '瓶',
        discount: '9.2',
        category: 'health',
        tags: ['保健品', '灵芝', '免疫力'],
        stock: 35,
        sales: 450
      },
      {
        id: 9,
        name: '燕窝',
        description: '优质燕窝，滋阴润燥，美容养颜',
        image: '../../public/img/bird-nest.jpg',
        price: '388',
        unit: '盒',
        discount: '9.0',
        category: 'health',
        tags: ['保健品', '燕窝', '美容'],
        stock: 40,
        sales: 300
      },
      {
        id: 10,
        name: '黑枸杞',
        description: '野生黑枸杞，富含花青素，抗氧化抗衰老',
        image: '../../public/img/black-wolfberry.jpg',
        price: '158',
        unit: '盒',
        discount: '9.3',
        category: 'health',
        tags: ['保健品', '枸杞', '抗氧化'],
        stock: 60,
        sales: 800
      },

      // 服饰类
      {
        id: 11,
        name: '防滑老人鞋',
        description: '防滑鞋底，舒适透气，适合老年人日常穿着',
        image: '../../public/img/anti-slip-shoes.jpg',
        price: '168',
        unit: '双',
        discount: '9.0',
        category: 'clothing',
        tags: ['防滑', '舒适', '老人'],
        stock: 45,
        sales: 350
      },
      {
        id: 12,
        name: '保暖护膝',
        description: '自发热护膝，缓解关节疼痛，四季可用',
        image: '../../public/img/knee-warmer.jpg',
        price: '89',
        unit: '对',
        discount: '9.2',
        category: 'clothing',
        tags: ['保暖', '护膝', '关节'],
        stock: 60,
        sales: 280
      },
      {
        id: 13,
        name: '按摩拖鞋',
        description: '足底按摩，促进血液循环，居家必备',
        image: '../../public/img/massage-slippers.jpg',
        price: '78',
        unit: '双',
        discount: '8.8',
        category: 'clothing',
        tags: ['按摩', '拖鞋', '足底'],
        stock: 80,
        sales: 420
      },
      {
        id: 14,
        name: '颈椎枕',
        description: '记忆棉材质，贴合颈椎曲线，改善睡眠',
        image: '../../public/img/cervical-pillow.jpg',
        price: '128',
        unit: '个',
        discount: '9.5',
        category: 'clothing',
        tags: ['颈椎', '记忆棉', '睡眠'],
        stock: 35,
        sales: 180
      },
      {
        id: 15,
        name: '保暖内衣套装',
        description: '纯棉材质，保暖透气，适合中老年人',
        image: '../../public/img/thermal-underwear.jpg',
        price: '98',
        unit: '套',
        discount: '9.0',
        category: 'clothing',
        tags: ['保暖', '纯棉', '内衣'],
        stock: 70,
        sales: 320
      },

      // 助老适老类
      {
        id: 16,
        name: '助行器',
        description: '四轮助行器，稳定安全，适合行动不便的老人',
        image: '../../public/img/walker.jpg',
        price: '299',
        unit: '台',
        discount: '8.5',
        category: 'elderly',
        tags: ['助行', '安全', '稳定'],
        stock: 20,
        sales: 120
      },
      {
        id: 17,
        name: '坐便椅',
        description: '可调节高度，扶手设计，方便老人如厕',
        image: '../../public/img/toilet-chair.jpg',
        price: '199',
        unit: '台',
        discount: '9.0',
        category: 'elderly',
        tags: ['坐便', '扶手', '调节'],
        stock: 25,
        sales: 85
      },
      {
        id: 18,
        name: '防滑垫',
        description: '浴室防滑垫，安全防滑，保护老人安全',
        image: '../../public/img/anti-slip-mat.jpg',
        price: '45',
        unit: '张',
        discount: '9.5',
        category: 'elderly',
        tags: ['防滑', '浴室', '安全'],
        stock: 100,
        sales: 280
      },
      {
        id: 19,
        name: '扶手栏杆',
        description: '浴室扶手，安装简便，提供安全支撑',
        image: '../../public/img/handrail.jpg',
        price: '88',
        unit: '个',
        discount: '9.2',
        category: 'elderly',
        tags: ['扶手', '支撑', '安全'],
        stock: 40,
        sales: 150
      },
      {
        id: 20,
        name: '轮椅',
        description: '轻便轮椅，可折叠设计，方便出行',
        image: '../../public/img/wheelchair.jpg',
        price: '599',
        unit: '台',
        discount: '8.8',
        category: 'elderly',
        tags: ['轮椅', '轻便', '折叠'],
        stock: 15,
        sales: 65
      },

      // 其它类
      {
        id: 21,
        name: '有机蜂蜜',
        description: '纯天然有机蜂蜜，润肺止咳，美容养颜',
        image: '../../public/img/honey.jpg',
        price: '68',
        unit: '瓶',
        discount: '9.8',
        category: 'other',
        tags: ['有机', '蜂蜜', '天然'],
        stock: 100,
        sales: 1500
      },
      {
        id: 22,
        name: '血糖试纸',
        description: '血糖仪配套试纸，精准检测，保质期长',
        image: '../../public/img/test-strips.jpg',
        price: '89',
        unit: '盒',
        discount: '9.5',
        category: 'other',
        tags: ['试纸', '血糖', '检测'],
        stock: 80,
        sales: 600
      },
      {
        id: 23,
        name: '维生素C泡腾片',
        description: '增强免疫力，抗氧化，预防感冒',
        image: '../../public/img/vitamin-c.jpg',
        price: '45',
        unit: '盒',
        discount: '9.5',
        category: 'other',
        tags: ['维生素', '免疫力', '抗氧化'],
        stock: 120,
        sales: 1800
      },
      {
        id: 24,
        name: '血压计电子式',
        description: '精准测量血压，大屏显示，操作简单',
        image: '../../public/img/blood-pressure.jpg',
        price: '299',
        unit: '台',
        discount: '8.5',
        category: 'other',
        tags: ['血压', '测量', '电子'],
        stock: 30,
        sales: 450
      },
      {
        id: 25,
        name: '血糖仪套装',
        description: '快速检测血糖，配套试纸，家用必备',
        image: '../../public/img/glucometer.jpg',
        price: '199',
        unit: '套',
        discount: '9.2',
        category: 'other',
        tags: ['血糖', '检测', '套装'],
        stock: 25,
        sales: 320
      }
    ]
  },

  onLoad() {
    this.setSafeArea();
    this.filterProducts();
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
    this.filterProducts();
  },

  // 筛选条件变化
  onFilterChange(e: any) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter
    });
    this.filterProducts();
  },

  // 筛选产品
  filterProducts() {
    const { products, searchKeyword, currentFilter } = this.data;
    let filtered: Product[] = products;

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter((item: Product) => 
        item.name.includes(searchKeyword) || 
        item.description.includes(searchKeyword) ||
        item.tags.some(tag => tag.includes(searchKeyword))
      );
    }

    // 按分类筛选
    if (currentFilter !== 'all') {
      filtered = filtered.filter((item: Product) => item.category === currentFilter);
    }

    this.setData({
      filteredProducts: filtered as any
    });
  },

  // 点击产品
  onProductTap(e: any) {
    const product = e.currentTarget.dataset.product;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${product.id}`
    });
  },

  // 加入购物车
  onAddToCart(e: any) {
    e.stopPropagation(); // 阻止事件冒泡
    const product: Product = e.currentTarget.dataset.product;
    
    // 获取购物车数据
    let cart: CartItem[] = wx.getStorageSync('shoppingCart') || [];
    
    // 检查是否已存在
    const existingItem = cart.find((item: CartItem) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }
    
    // 保存到本地存储
    wx.setStorageSync('shoppingCart', cart);
    
    // 显示成功提示
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 1500
    });
    
    // 跳转到购物车页面
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/shopping-cart/shopping-cart'
      });
    }, 1500);
  }
});
