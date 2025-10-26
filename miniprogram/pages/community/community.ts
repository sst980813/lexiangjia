// community.ts

interface User {
  id: number;
  name: string;
  avatar: string;
  followed: boolean;
}

interface Post {
  id: number;
  user: User;
  content: string;
  images?: string[];
  tags?: string[];
  time: string;
  likes: number;
  comments: number;
  liked: boolean;
}

Page({
  data: {
    // 安全区域相关
    safeAreaClass: '',
    safeAreaStyle: '',
    
    // 帖子数据
    posts: [
      {
        id: 1,
        user: {
          id: 1,
          name: '张奶奶',
          avatar: '../../public/img/avatar1.jpg',
          followed: false
        },
        content: '今天在公园练太极，感觉身体越来越好了！退休生活也可以很精彩，大家都要保持好心情哦～',
        images: [
          '../../public/img/taiji1.jpg',
          '../../public/img/taiji2.jpg'
        ],
        tags: ['太极', '养生', '退休生活'],
        time: '2小时前',
        likes: 28,
        comments: 12,
        liked: false
      },
      {
        id: 2,
        user: {
          id: 2,
          name: '李爷爷',
          avatar: '../../public/img/avatar2.jpg',
          followed: true
        },
        content: '孙子今天教我玩手机拍照，拍出来的照片还挺好看的！科技发展真快，我们也要跟上时代步伐。',
        images: [
          '../../public/img/photo1.jpg'
        ],
        tags: ['摄影', '科技', '隔代教育'],
        time: '4小时前',
        likes: 45,
        comments: 18,
        liked: true
      },
      {
        id: 3,
        user: {
          id: 3,
          name: '王阿姨',
          avatar: '../../public/img/avatar3.jpg',
          followed: false
        },
        content: '今天和姐妹们一起做手工，编织了一个小包包，很有成就感！手工制作不仅能锻炼手指，还能让心情愉悦。',
        images: [
          '../../public/img/handwork1.jpg',
          '../../public/img/handwork2.jpg',
          '../../public/img/handwork3.jpg'
        ],
        tags: ['手工', '编织', '姐妹聚会'],
        time: '6小时前',
        likes: 32,
        comments: 15,
        liked: false
      },
      {
        id: 4,
        user: {
          id: 4,
          name: '陈叔叔',
          avatar: '../../public/img/avatar4.jpg',
          followed: false
        },
        content: '今天在社区书法班练习写字，老师说我进步很大！书法不仅能修身养性，还能结交志同道合的朋友。',
        images: [
          '../../public/img/calligraphy1.jpg'
        ],
        tags: ['书法', '学习', '社区活动'],
        time: '1天前',
        likes: 38,
        comments: 22,
        liked: false
      },
      {
        id: 5,
        user: {
          id: 5,
          name: '刘奶奶',
          avatar: '../../public/img/avatar5.jpg',
          followed: true
        },
        content: '今天和女儿一起做菜，教她做我最拿手的红烧肉。看着女儿认真学习的样子，心里特别温暖。',
        images: [
          '../../public/img/cooking1.jpg',
          '../../public/img/cooking2.jpg'
        ],
        tags: ['烹饪', '家庭', '母女时光'],
        time: '1天前',
        likes: 52,
        comments: 25,
        liked: true
      },
      {
        id: 6,
        user: {
          id: 6,
          name: '赵爷爷',
          avatar: '../../public/img/avatar6.jpg',
          followed: false
        },
        content: '今天在花园里种了一些花，看着它们慢慢长大，心情特别好。园艺不仅能美化环境，还能陶冶情操。',
        images: [
          '../../public/img/garden1.jpg',
          '../../public/img/garden2.jpg',
          '../../public/img/garden3.jpg',
          '../../public/img/garden4.jpg'
        ],
        tags: ['园艺', '花卉', '生活情趣'],
        time: '2天前',
        likes: 41,
        comments: 19,
        liked: false
      },
      {
        id: 7,
        user: {
          id: 7,
          name: '孙阿姨',
          avatar: '../../public/img/avatar7.jpg',
          followed: false
        },
        content: '今天参加了社区的健康讲座，学到了很多养生知识。健康是最大的财富，大家都要好好照顾自己！',
        images: [
          '../../public/img/health1.jpg'
        ],
        tags: ['健康', '养生', '社区讲座'],
        time: '2天前',
        likes: 35,
        comments: 16,
        liked: false
      },
      {
        id: 8,
        user: {
          id: 8,
          name: '周奶奶',
          avatar: '../../public/img/avatar8.jpg',
          followed: true
        },
        content: '今天和孙女一起画画，她画的小花特别可爱。隔代教育虽然不容易，但看到孩子快乐成长，一切都值得。',
        images: [
          '../../public/img/drawing1.jpg',
          '../../public/img/drawing2.jpg'
        ],
        tags: ['隔代教育', '绘画', '祖孙情'],
        time: '3天前',
        likes: 48,
        comments: 21,
        liked: true
      }
    ]
  },

  // 点击帖子
  onPostTap(e: any) {
    const post = e.currentTarget.dataset.post;
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?id=${post.id}`
    });
  },

  // 关注用户
  onFollowUser(e: any) {
    const user = e.currentTarget.dataset.user;
    const posts = this.data.posts;
    const postIndex = posts.findIndex(post => post.user.id === user.id);
    
    if (postIndex !== -1) {
      posts[postIndex].user.followed = true;
      this.setData({
        posts: posts
      });
      
      wx.showToast({
        title: `已关注${user.name}`,
        icon: 'success',
        duration: 1500
      });
    }
  },

  // 点赞帖子
  onLikePost(e: any) {
    const post = e.currentTarget.dataset.post;
    const posts = this.data.posts;
    const postIndex = posts.findIndex(p => p.id === post.id);
    
    if (postIndex !== -1) {
      if (posts[postIndex].liked) {
        posts[postIndex].likes -= 1;
        posts[postIndex].liked = false;
      } else {
        posts[postIndex].likes += 1;
        posts[postIndex].liked = true;
      }
      
      this.setData({
        posts: posts
      });
    }
  },

  // 评论帖子
  onCommentPost(e: any) {
    const post = e.currentTarget.dataset.post;
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?id=${post.id}&focus=comment`
    });
  },

  // 分享帖子
  onSharePost() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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

  // 创建帖子
  onCreatePost() {
    wx.navigateTo({
      url: '/pages/create-post/create-post'
    });
  },

  // 初始化安全区域
  initSafeArea() {
    try {
      const systemInfo = wx.getSystemInfoSync();
      console.log('系统信息:', systemInfo);
      
      const { model, screenHeight, safeArea } = systemInfo;
      let safeAreaBottom = 0;
      
      // 优先使用系统提供的safeArea信息
      if (safeArea && safeArea.bottom && screenHeight) {
        safeAreaBottom = screenHeight - safeArea.bottom;
        console.log('safeArea.bottom:', safeArea.bottom, 'screenHeight:', screenHeight);
      }
      
      // 如果系统值不可靠或为负数，使用设备型号判断
      if (safeAreaBottom <= 0 && model && model.includes('iPhone')) {
        if (model.includes('iPhone X') || model.includes('iPhone 11') || 
            model.includes('iPhone 12') || model.includes('iPhone 13') || 
            model.includes('iPhone 14') || model.includes('iPhone 15')) {
          safeAreaBottom = 34; // iPhone X系列的标准安全区域高度
        }
      }
      
      console.log('底部安全区域高度:', safeAreaBottom);
      
      // 只有在合理范围内才应用安全距离
      if (safeAreaBottom > 0 && safeAreaBottom <= 50) {
        const safeAreaBottomPx = safeAreaBottom * 2 + 'rpx';
        
        this.setData({
          safeAreaClass: 'safe-area',
          safeAreaStyle: `--safe-area-bottom: ${safeAreaBottomPx};`
        });
        
        console.log('已设置安全区域:', safeAreaBottomPx);
      } else {
        console.log('无需设置安全区域，值:', safeAreaBottom);
      }
    } catch (error) {
      console.error('获取系统信息失败:', error);
    }
  },
  
  // 页面生命周期
  onLoad() {
    console.log('社区页面已加载')
    this.initSafeArea()
  },

  onShow() {
    console.log('社区页面显示')
  }
})
