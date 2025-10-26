// product-detail.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    product: {
      id: 0,
      name: '',
      description: '',
      image: '',
      price: '',
      unit: '',
      discount: '',
      originalPrice: '',
      category: '',
      categoryName: '',
      tags: [],
      stock: 0,
      sales: 0,
      rating: '',
      reviews: 0,
      specification: '',
      shelfLife: '',
      manufacturer: '',
      details: '',
      usage: '',
      notice: '',
      reviewList: []
    },
    quantity: 1
  },

  onLoad(options: any) {
    this.setSafeArea();
    this.loadProductData(options.id);
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

  // 加载产品数据
  loadProductData(id: string) {
    const products = [
      {
        id: 1,
        name: '深海鱼油软胶囊',
        description: '富含Omega-3，保护心血管健康，提高免疫力',
        image: '../../public/img/fish-oil.jpg',
        price: '128',
        unit: '瓶',
        discount: '9.5',
        originalPrice: '135',
        category: 'supplement',
        categoryName: '保健品',
        tags: ['保健品', '心血管', '免疫力'],
        stock: 50,
        sales: 1200,
        rating: '4.8',
        reviews: 256,
        specification: '100粒/瓶',
        shelfLife: '24个月',
        manufacturer: '康美药业',
        details: '深海鱼油软胶囊采用深海鱼类提取的优质鱼油，富含EPA和DHA，有助于维护心血管健康，提高免疫力，适合中老年人日常保健。',
        usage: '每日2次，每次1粒，饭后服用，建议连续服用3个月以上效果更佳。',
        notice: '本品不能代替药物，如有疾病请遵医嘱。孕妇、哺乳期妇女及儿童请在医师指导下使用。',
        reviewList: [
          {
            id: 1,
            name: '张**',
            rating: 5,
            content: '效果很好，血压稳定了很多，会继续购买。',
            date: '2024-01-15'
          },
          {
            id: 2,
            name: '李**',
            rating: 4,
            content: '质量不错，包装也很好，推荐购买。',
            date: '2024-01-10'
          }
        ]
      },
      {
        id: 2,
        name: '钙片维生素D',
        description: '强健骨骼，预防骨质疏松，适合中老年人',
        image: '../../public/img/calcium.jpg',
        price: '89',
        unit: '瓶',
        discount: '9.0',
        originalPrice: '99',
        category: 'supplement',
        categoryName: '保健品',
        tags: ['保健品', '骨骼', '维生素'],
        stock: 80,
        sales: 980,
        rating: '4.6',
        reviews: 189,
        specification: '60片/瓶',
        shelfLife: '36个月',
        manufacturer: '汤臣倍健',
        details: '钙片维生素D含有丰富的钙质和维生素D3，有助于骨骼健康，预防骨质疏松，特别适合中老年人补充钙质。',
        usage: '每日1-2次，每次1片，饭后服用，建议配合运动效果更佳。',
        notice: '不宜与含草酸的食物同食，如菠菜、茶叶等。肾功能不全者慎用。',
        reviewList: [
          {
            id: 1,
            name: '王**',
            rating: 5,
            content: '补钙效果明显，腿脚有力了。',
            date: '2024-01-12'
          }
        ]
      },
      {
        id: 3,
        name: '血压计电子式',
        description: '精准测量血压，大屏显示，操作简单',
        image: '../../public/img/blood-pressure.jpg',
        price: '299',
        unit: '台',
        discount: '8.5',
        originalPrice: '352',
        category: 'equipment',
        categoryName: '器械',
        tags: ['器械', '血压', '测量'],
        stock: 30,
        sales: 450,
        rating: '4.7',
        reviews: 98,
        specification: '上臂式电子血压计',
        shelfLife: '5年',
        manufacturer: '欧姆龙',
        details: '电子血压计采用先进的测量技术，测量精准，大屏显示清晰，操作简单，适合家庭日常血压监测。',
        usage: '将袖带绑在上臂，按下开始键即可测量，建议每天同一时间测量。',
        notice: '测量前请休息5分钟，避免剧烈运动。如有异常请及时就医。',
        reviewList: [
          {
            id: 1,
            name: '刘**',
            rating: 5,
            content: '测量很准确，和医院的基本一致。',
            date: '2024-01-08'
          }
        ]
      }
    ];

    const product = products.find(item => item.id === parseInt(id));
    if (product) {
      this.setData({
        product: product
      });
    } else {
      wx.showToast({
        title: '产品不存在',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 数量变化
  onQuantityChange(e: any) {
    const action = e.currentTarget.dataset.action;
    const { quantity, product } = this.data;
    
    if (action === 'increase') {
      if (quantity < product.stock) {
        this.setData({
          quantity: quantity + 1
        });
      } else {
        wx.showToast({
          title: '库存不足',
          icon: 'none'
        });
      }
    } else if (action === 'decrease') {
      if (quantity > 1) {
        this.setData({
          quantity: quantity - 1
        });
      }
    }
  },

  // 加入购物车
  onAddToCart() {
    const { product, quantity } = this.data;
    
    // 获取购物车数据
    let cart = wx.getStorageSync('shoppingCart') || [];
    
    // 检查是否已存在
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity: quantity
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
  },

  // 立即购买
  onBuyNow() {
    const { product, quantity } = this.data;
    
    // 将商品添加到购物车
    let cart = wx.getStorageSync('shoppingCart') || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity: quantity
      });
    }
    
    wx.setStorageSync('shoppingCart', cart);
    
    // 直接跳转到购物车页面
    wx.switchTab({
      url: '/pages/shopping-cart/shopping-cart'
    });
  }
});
