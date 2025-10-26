// post-detail.ts

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

interface Comment {
  id: number;
  user: User;
  content: string;
  time: string;
}

Page({
  data: {
    post: null as Post | null,
    comments: [] as Comment[],
    commentText: ''
  },

  onLoad(options: any) {
    const postId = options.id;
    this.loadPostDetail(postId);
    this.loadComments(postId);
  },

  // 加载帖子详情
  loadPostDetail(postId: string) {
    // 首先尝试从社区页面获取帖子数据
    const pages = getCurrentPages();
    const communityPage = pages.find(page => page.route === 'pages/community/community');
    
    if (communityPage && communityPage.data.posts) {
      const posts = communityPage.data.posts;
      const post = posts.find((p: any) => p.id === parseInt(postId));
      
      if (post) {
        this.setData({
          post: post
        });
        return;
      }
    }

    // 如果社区页面没有找到，使用模拟数据
    const mockPosts = [
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
    ];
    
    const post = mockPosts.find(p => p.id === parseInt(postId));
    if (post) {
      this.setData({
        post: post
      });
    } else {
      wx.showToast({
        title: '帖子不存在',
        icon: 'none',
        duration: 1500
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 加载评论
  loadComments(postId: string) {
    // 首先检查是否是新发布的帖子（ID大于1000000表示是时间戳ID）
    const postIdNum = parseInt(postId);
    if (postIdNum > 1000000) {
      // 新发布的帖子，设置空评论列表
      this.setData({
        comments: []
      });
      return;
    }

    // 模拟评论数据，根据帖子ID返回不同的评论
    const commentsMap: { [key: string]: Comment[] } = {
      '1': [
        {
          id: 1,
          user: {
            id: 2,
            name: '李爷爷',
            avatar: '../../public/img/avatar2.jpg',
            followed: false
          },
          content: '张奶奶说得对！我也每天练太极，身体确实好多了',
          time: '1小时前'
        },
        {
          id: 2,
          user: {
            id: 3,
            name: '王阿姨',
            avatar: '../../public/img/avatar3.jpg',
            followed: false
          },
          content: '太极确实很适合我们老年人，动作舒缓，对身体好',
          time: '30分钟前'
        }
      ],
      '2': [
        {
          id: 3,
          user: {
            id: 1,
            name: '张奶奶',
            avatar: '../../public/img/avatar1.jpg',
            followed: false
          },
          content: '李爷爷学得真快！我孙子也教过我，但我总是记不住',
          time: '2小时前'
        },
        {
          id: 4,
          user: {
            id: 4,
            name: '陈叔叔',
            avatar: '../../public/img/avatar4.jpg',
            followed: false
          },
          content: '科技发展确实快，我们也要跟上时代',
          time: '1小时前'
        }
      ],
      '3': [
        {
          id: 5,
          user: {
            id: 5,
            name: '刘奶奶',
            avatar: '../../public/img/avatar5.jpg',
            followed: false
          },
          content: '王阿姨的手工真漂亮！我也想学编织',
          time: '3小时前'
        }
      ],
      '4': [
        {
          id: 6,
          user: {
            id: 6,
            name: '赵爷爷',
            avatar: '../../public/img/avatar6.jpg',
            followed: false
          },
          content: '陈叔叔的字写得真好！我也在学书法',
          time: '1天前'
        }
      ],
      '5': [
        {
          id: 7,
          user: {
            id: 7,
            name: '孙阿姨',
            avatar: '../../public/img/avatar7.jpg',
            followed: false
          },
          content: '刘奶奶的红烧肉一定很好吃！能教教我吗？',
          time: '1天前'
        }
      ],
      '6': [
        {
          id: 8,
          user: {
            id: 8,
            name: '周奶奶',
            avatar: '../../public/img/avatar8.jpg',
            followed: false
          },
          content: '赵爷爷的花园真美！我也喜欢种花',
          time: '2天前'
        }
      ],
      '7': [
        {
          id: 9,
          user: {
            id: 1,
            name: '张奶奶',
            avatar: '../../public/img/avatar1.jpg',
            followed: false
          },
          content: '健康讲座很有用，学到了很多知识',
          time: '2天前'
        }
      ],
      '8': [
        {
          id: 10,
          user: {
            id: 2,
            name: '李爷爷',
            avatar: '../../public/img/avatar2.jpg',
            followed: false
          },
          content: '周奶奶和孙女一起画画真温馨！',
          time: '3天前'
        }
      ]
    };
    
    const comments = commentsMap[postId] || [];
    this.setData({
      comments: comments
    });
  },

  // 关注用户
  onFollowUser() {
    const post = this.data.post;
    if (post) {
      post.user.followed = true;
      this.setData({
        post: post
      });
      
      wx.showToast({
        title: `已关注${post.user.name}`,
        icon: 'success',
        duration: 1500
      });
    }
  },

  // 点赞帖子
  onLikePost() {
    const post = this.data.post;
    if (post) {
      if (post.liked) {
        post.likes -= 1;
        post.liked = false;
      } else {
        post.likes += 1;
        post.liked = true;
      }
      
      this.setData({
        post: post
      });
    }
  },

  // 评论帖子
  onCommentPost() {
    // 聚焦到评论输入框
    wx.showToast({
      title: '请在下方的输入框中写评论',
      icon: 'none',
      duration: 2000
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

  // 评论输入
  onCommentInput(e: any) {
    this.setData({
      commentText: e.detail.value
    });
  },

  // 发送评论
  onSendComment() {
    const commentText = this.data.commentText.trim();
    if (!commentText) {
      wx.showToast({
        title: '请输入评论内容',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    // 模拟添加评论
    const newComment = {
      id: Date.now(),
      user: {
        id: 999,
        name: '我',
        avatar: '../../public/img/my-avatar.jpg',
        followed: false
      },
      content: commentText,
      time: '刚刚'
    };

    const comments = [...this.data.comments, newComment];
    this.setData({
      comments: comments,
      commentText: ''
    });

    // 更新帖子评论数
    const post = this.data.post;
    if (post) {
      post.comments += 1;
      this.setData({
        post: post
      });
    }

    wx.showToast({
      title: '评论成功',
      icon: 'success',
      duration: 1500
    });
  }
});
