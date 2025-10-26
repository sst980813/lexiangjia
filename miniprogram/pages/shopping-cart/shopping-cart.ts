// shopping-cart.ts
Page({
  data: {
    safeAreaClass: '',
    safeAreaStyle: '',
    cartItems: [],
    allSelected: false,
    selectedItems: [],
    totalPrice: '0.00'
  },

  onLoad() {
    this.setSafeArea();
    this.loadCartData();
  },

  onShow() {
    this.setSafeArea();
    this.loadCartData();
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

  // 加载购物车数据
  loadCartData() {
    const cart = wx.getStorageSync('shoppingCart') || [];
    const cartItems = cart.map(item => ({
      ...item,
      selected: true // 默认选中
    }));
    
    this.setData({
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  // 计算总价
  calculateTotal() {
    const { cartItems } = this.data;
    const selectedItems = cartItems.filter(item => item.selected);
    const totalPrice = selectedItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
    
    this.setData({
      selectedItems: selectedItems,
      totalPrice: totalPrice.toFixed(2),
      allSelected: selectedItems.length === cartItems.length && cartItems.length > 0
    });
  },

  // 选择/取消选择商品
  onItemSelect(e: any) {
    const id = e.currentTarget.dataset.id;
    const checked = e.detail.value;
    
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id) {
        return { ...item, selected: checked };
      }
      return item;
    });
    
    this.setData({
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  // 全选/取消全选
  onSelectAll(e: any) {
    const checked = e.detail.value;
    const cartItems = this.data.cartItems.map(item => ({
      ...item,
      selected: checked
    }));
    
    this.setData({
      cartItems: cartItems
    });
    
    this.calculateTotal();
  },

  // 数量变化
  onQuantityChange(e: any) {
    const id = e.currentTarget.dataset.id;
    const action = e.currentTarget.dataset.action;
    
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id) {
        let newQuantity = item.quantity;
        if (action === 'increase') {
          newQuantity += 1;
        } else if (action === 'decrease' && newQuantity > 1) {
          newQuantity -= 1;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    this.setData({
      cartItems: cartItems
    });
    
    // 更新本地存储
    const updatedCart = cartItems.map(item => {
      const { selected, ...rest } = item;
      return rest;
    });
    wx.setStorageSync('shoppingCart', updatedCart);
    
    this.calculateTotal();
  },

  // 删除商品
  onDeleteItem(e: any) {
    const id = e.currentTarget.dataset.id;
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个商品吗？',
      success: (res) => {
        if (res.confirm) {
          const cartItems = this.data.cartItems.filter(item => item.id !== id);
          
          this.setData({
            cartItems: cartItems
          });
          
          // 更新本地存储
          wx.setStorageSync('shoppingCart', cartItems);
          
          this.calculateTotal();
          
          wx.showToast({
            title: '已删除',
            icon: 'success'
          });
        }
      }
    });
  },

  // 去购物
  onGoShopping() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 结算
  onCheckout() {
    const { selectedItems } = this.data;
    
    if (selectedItems.length === 0) {
      wx.showToast({
        title: '请选择要结算的商品',
        icon: 'none'
      });
      return;
    }
    
    // 计算总价
    const totalPrice = selectedItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
    
    wx.showModal({
      title: '确认结算',
      content: `共${selectedItems.length}件商品，总计¥${totalPrice.toFixed(2)}`,
      success: (res) => {
        if (res.confirm) {
          this.processOrder(selectedItems);
        }
      }
    });
  },

  // 处理订单
  processOrder(selectedItems: any[]) {
    wx.showLoading({
      title: '处理中...'
    });
    
    // 模拟订单处理
    setTimeout(() => {
      wx.hideLoading();
      
      // 从购物车中移除已结算的商品
      const remainingItems = this.data.cartItems.filter(item => !item.selected);
      this.setData({
        cartItems: remainingItems
      });
      
      // 更新本地存储
      wx.setStorageSync('shoppingCart', remainingItems);
      
      this.calculateTotal();
      
      wx.showModal({
        title: '订单提交成功',
        content: '您的订单已提交，我们将尽快为您处理。',
        showCancel: false,
        success: () => {
          // 可以跳转到订单页面
        }
      });
    }, 2000);
  }
});
