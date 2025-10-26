// health-products.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    searchKeyword: '',
    currentFilter: 'all',
    filteredProducts: [],
    products: [
      {
        id: 1,
        name: '深海鱼油软胶囊',
        description: '富含Omega-3，保护心血管健康，提高免疫力',
        image: '../../public/img/fish-oil.jpg',
        price: '128',
        unit: '瓶',
        discount: '9.5',
        category: 'supplement',
        tags: ['保健品', '心血管', '免疫力'],
        stock: 50,
        sales: 1200
      },
      {
        id: 2,
        name: '钙片维生素D',
        description: '强健骨骼，预防骨质疏松，适合中老年人',
        image: '../../public/img/calcium.jpg',
        price: '89',
        unit: '瓶',
        discount: '9.0',
        category: 'supplement',
        tags: ['保健品', '骨骼', '维生素'],
        stock: 80,
        sales: 980
      },
      {
        id: 3,
        name: '血压计电子式',
        description: '精准测量血压，大屏显示，操作简单',
        image: '../../public/img/blood-pressure.jpg',
        price: '299',
        unit: '台',
        discount: '8.5',
        category: 'equipment',
        tags: ['器械', '血压', '测量'],
        stock: 30,
        sales: 450
      },
      {
        id: 4,
        name: '血糖仪套装',
        description: '快速检测血糖，配套试纸，家用必备',
        image: '../../public/img/glucometer.jpg',
        price: '199',
        unit: '套',
        discount: '9.2',
        category: 'equipment',
        tags: ['器械', '血糖', '检测'],
        stock: 25,
        sales: 320
      },
      {
        id: 5,
        name: '有机蜂蜜',
        description: '纯天然有机蜂蜜，润肺止咳，美容养颜',
        image: '../../public/img/honey.jpg',
        price: '68',
        unit: '瓶',
        discount: '9.8',
        category: 'food',
        tags: ['食品', '有机', '蜂蜜'],
        stock: 100,
        sales: 1500
      },
      {
        id: 6,
        name: '黑枸杞',
        description: '野生黑枸杞，富含花青素，抗氧化抗衰老',
        image: '../../public/img/black-wolfberry.jpg',
        price: '158',
        unit: '盒',
        discount: '9.3',
        category: 'food',
        tags: ['食品', '枸杞', '抗氧化'],
        stock: 60,
        sales: 800
      },
      {
        id: 7,
        name: '阿司匹林肠溶片',
        description: '预防心血管疾病，降低血栓风险',
        image: '../../public/img/aspirin.jpg',
        price: '25',
        unit: '盒',
        discount: '9.0',
        category: 'medicine',
        tags: ['药品', '心血管', '预防'],
        stock: 200,
        sales: 2500
      },
      {
        id: 8,
        name: '维生素C泡腾片',
        description: '增强免疫力，抗氧化，预防感冒',
        image: '../../public/img/vitamin-c.jpg',
        price: '45',
        unit: '盒',
        discount: '9.5',
        category: 'supplement',
        tags: ['保健品', '维生素', '免疫力'],
        stock: 120,
        sales: 1800
      },
      {
        id: 9,
        name: '按摩椅',
        description: '全身按摩，缓解疲劳，促进血液循环',
        image: '../../public/img/massage-chair.jpg',
        price: '2999',
        unit: '台',
        discount: '8.8',
        category: 'equipment',
        tags: ['器械', '按摩', '放松'],
        stock: 15,
        sales: 120
      },
      {
        id: 10,
        name: '燕窝',
        description: '优质燕窝，滋阴润燥，美容养颜',
        image: '../../public/img/bird-nest.jpg',
        price: '388',
        unit: '盒',
        discount: '9.0',
        category: 'food',
        tags: ['食品', '燕窝', '美容'],
        stock: 40,
        sales: 300
      },
      {
        id: 11,
        name: '血糖试纸',
        description: '血糖仪配套试纸，精准检测，保质期长',
        image: '../../public/img/test-strips.jpg',
        price: '89',
        unit: '盒',
        discount: '9.5',
        category: 'equipment',
        tags: ['器械', '试纸', '血糖'],
        stock: 80,
        sales: 600
      },
      {
        id: 12,
        name: '灵芝孢子粉',
        description: '破壁灵芝孢子粉，增强免疫力，抗肿瘤',
        image: '../../public/img/lingzhi.jpg',
        price: '268',
        unit: '瓶',
        discount: '9.2',
        category: 'supplement',
        tags: ['保健品', '灵芝', '免疫力'],
        stock: 35,
        sales: 450
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
    let filtered = products;

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter(item => 
        item.name.includes(searchKeyword) || 
        item.description.includes(searchKeyword) ||
        item.tags.some(tag => tag.includes(searchKeyword))
      );
    }

    // 按分类筛选
    if (currentFilter !== 'all') {
      filtered = filtered.filter(item => item.category === currentFilter);
    }

    this.setData({
      filteredProducts: filtered
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
    const product = e.currentTarget.dataset.product;
    
    // 获取购物车数据
    let cart = wx.getStorageSync('shoppingCart') || [];
    
    // 检查是否已存在
    const existingItem = cart.find(item => item.id === product.id);
    
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
