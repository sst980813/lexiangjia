// create-post.ts

Page({
  data: {
    postText: '',
    images: [] as string[],
    tagsText: '',
    tags: [] as string[],
    canPublish: false
  },

  onLoad() {
    console.log('发帖页面已加载');
  },

  // 文本输入
  onTextInput(e: any) {
    const text = e.detail.value;
    this.setData({
      postText: text
    });
    this.checkCanPublish();
  },

  // 选择图片
  onChooseImage() {
    const maxCount = 9 - this.data.images.length;
    wx.chooseImage({
      count: maxCount,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const newImages = [...this.data.images, ...res.tempFilePaths];
        this.setData({
          images: newImages
        });
        this.checkCanPublish();
      },
      fail: (err) => {
        console.error('选择图片失败:', err);
        wx.showToast({
          title: '选择图片失败',
          icon: 'none',
          duration: 1500
        });
      }
    });
  },

  // 删除图片
  onDeleteImage(e: any) {
    const imageToDelete = e.currentTarget.dataset.image;
    const images = this.data.images.filter(img => img !== imageToDelete);
    this.setData({
      images: images
    });
    this.checkCanPublish();
  },

  // 标签输入
  onTagsInput(e: any) {
    const text = e.detail.value;
    const tags = text.split(' ').filter((tag: string) => tag.trim().length > 0);
    this.setData({
      tagsText: text,
      tags: tags
    });
  },

  // 检查是否可以发布
  checkCanPublish() {
    const canPublish = this.data.postText.trim().length > 0 || this.data.images.length > 0;
    this.setData({
      canPublish: canPublish
    });
  },

  // 发布帖子
  onPublishPost() {
    if (!this.data.canPublish) {
      wx.showToast({
        title: '请输入内容或添加图片',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    wx.showLoading({
      title: '发布中...',
      mask: true
    });

    // 模拟发布过程
    setTimeout(() => {
      wx.hideLoading();
      
      // 创建新帖子数据
      const newPost = {
        id: Date.now(), // 使用时间戳作为唯一ID
        user: {
          id: 999,
          name: '我',
          avatar: '../../public/img/my-avatar.jpg',
          followed: false
        },
        content: this.data.postText.trim(),
        images: this.data.images,
        tags: this.data.tags,
        time: '刚刚',
        likes: 0,
        comments: 0,
        liked: false
      };

      // 获取社区页面实例并添加新帖子
      const pages = getCurrentPages();
      const communityPage = pages[pages.length - 2]; // 获取上一个页面（社区页面）
      
      if (communityPage && communityPage.route === 'pages/community/community') {
        const posts = communityPage.data.posts || [];
        posts.unshift(newPost); // 将新帖子添加到列表顶部
        
        communityPage.setData({
          posts: posts
        });
      }

      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 1500
      });

      // 返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 2000);
  }
});
