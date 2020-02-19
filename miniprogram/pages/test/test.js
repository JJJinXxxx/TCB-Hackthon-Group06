const app = getApp()
import Card from '../../palette/image-example';
var sum = 0;
var goal = 0;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    already:true,
    print:false,
    startText:"开始答题",
    startAgain:"保存海报",
    showOneButtonDialog:false,
    oneButton: [{ text: '好好好👌' }],
    tips:"再想想~",
    title:"提示哈😄",
    goal:0,
    grade:0,
    one:false,
    two:false,
    three:false,
    four:false,
    five:false,
    template: {},
    q1:"题目1",
    q2:"题目2",
    q3:"题目3",
    q4:"题目4",
    q5:"题目5",
    a:"A选项",
    b:"B选项",
    c:"C选项",
    d:"D选项",
    },

  onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
    console.log(e);
  },

  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.imagePath,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  startTest(e) {
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] ',res.result),
          this.setData({
            q1: res.result.questions.data[0].value,
            startText: "生成海报",
            one: "true",
            already:"false",
            a: res.result.questions.data[0].questionList[0].value,
            b: res.result.questions.data[0].questionList[1].value,
            c: res.result.questions.data[0].questionList[2].value,
            d: res.result.questions.data[0].questionList[3].value
          })
        },
        fail: err => {
          console.error('[云函数] [getQuestion] 调用失败', err)
          wx.navigateTo({
            url: '../deployFunctions/deployFunctions',
          })
        }
      })
  },
  next1(e) {
    // 获取当前页面上，点击的是第几个选项
    var a = Number(e.target.id)
    console.log(e.target.id),
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] questions: ', res.result.questions.data[0].questionList[a].is_true)
          // 答对没有！？
          if (res.result.questions.data[0].questionList[a].is_true) {
            // 对了就奖励加分！
              sum += res.result.questions.data[0].point,
              console.log(sum),
              goal++,
              wx.showToast({
                // 表扬一下你！
                title: '哈哈哈答对啦！',
                icon: 'success',
                duration: 2000
              })
          } else {
            // 错了？哼哼哼！
            wx.showToast({
              title: '错了嗷~ ',
              icon: 'none',
              duration: 500
            }),
            // 显示提示
            this.setData({
              showOneButtonDialog: true
            })
          }
          // 无情侩子手，下一题
            this.setData({
              q2: res.result.questions.data[1].value,
              a: res.result.questions.data[1].questionList[0].value,
              b: res.result.questions.data[1].questionList[1].value,
              c: res.result.questions.data[1].questionList[2].value,
              d: res.result.questions.data[1].questionList[3].value,
              one: "false",
              two: "true",
              tips: res.result.questions.data[0].hint
            })
        }
      })
  },
  next2(e) {
    // 获取当前页面上，点击的是第几个选项
    var a = Number(e.target.id)
    console.log(e.target.id),
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] questions: ', res.result.questions.data[1].questionList[a].is_true)
          // 答对没有！？
          if (res.result.questions.data[1].questionList[a].is_true) {
            // 对了就奖励加分！
            sum += res.result.questions.data[1].point,
              console.log(sum),
              goal++ ,              
              wx.showToast({
                // 表扬一下你！
                title: '哈哈哈答对啦！',
                icon: 'success',
                duration: 2000
              })
          } else {
            // 错了？哼哼哼！
            wx.showToast({
              title: '错了嗷~ ',
              icon: 'none',
              duration: 500
            }),
              // 显示提示
              this.setData({
                showOneButtonDialog: true
              })
          }
          // 无情侩子手，下一题
          this.setData({
            q3: res.result.questions.data[2].value,
            a: res.result.questions.data[2].questionList[0].value,
            b: res.result.questions.data[2].questionList[1].value,
            c: res.result.questions.data[2].questionList[2].value,
            d: res.result.questions.data[2].questionList[3].value,
            two: "false",
            three: "true",
            tips: res.result.questions.data[1].hint
          })
        }
      })
  },

  next3(e) {
    // 获取当前页面上，点击的是第几个选项
    var a = Number(e.target.id)
    console.log(e.target.id),
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] questions: ', res.result.questions.data[1].questionList[a].is_true)
          // 答对没有！？
          if (res.result.questions.data[2].questionList[a].is_true) {
            // 对了就奖励加分！
            sum += res.result.questions.data[2].point,
              console.log(sum),
              goal++ ,
              wx.showToast({
                // 表扬一下你！
                title: '哈哈哈答对啦！',
                icon: 'success',
                duration: 2000
              })
          } else {
            // 错了？哼哼哼！
            wx.showToast({
              title: '错了嗷~ ',
              icon: 'none',
              duration: 500
            }),
              // 显示提示
              this.setData({
                showOneButtonDialog: true
              })
          }
          // 无情侩子手，下一题
          this.setData({
            q4: res.result.questions.data[3].value,
            a: res.result.questions.data[3].questionList[0].value,
            b: res.result.questions.data[3].questionList[1].value,
            c: res.result.questions.data[3].questionList[2].value,
            d: res.result.questions.data[3].questionList[3].value,
            three: "false",
            four: "true",
            tips: res.result.questions.data[2].hint
          })
        }
      })
  },
  next4(e) {
    // 获取当前页面上，点击的是第几个选项
    var a = Number(e.target.id)
    console.log(e.target.id),
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] questions: ', res.result.questions.data[3].questionList[a].is_true)
          // 答对没有！？
          if (res.result.questions.data[3].questionList[a].is_true) {
            // 对了就奖励加分！
            sum += res.result.questions.data[3].point,
              console.log(sum),
              goal++ ,
              wx.showToast({
                // 表扬一下你！
                title: '哈哈哈答对啦！',
                icon: 'success',
                duration: 2000
              })
          } else {
            // 错了？哼哼哼！
            wx.showToast({
              title: '错了嗷~ ',
              icon: 'none',
              duration: 500
            }),
              // 显示提示
              this.setData({
                showOneButtonDialog: true
              })
          }
          // 无情侩子手，下一题
          this.setData({
            q5: res.result.questions.data[4].value,
            a: res.result.questions.data[4].questionList[0].value,
            b: res.result.questions.data[4].questionList[1].value,
            c: res.result.questions.data[4].questionList[2].value,
            d: res.result.questions.data[4].questionList[3].value,
            four: "false",
            five: "true",
            tips: res.result.questions.data[3].hint
          })
        }
      })
  },
  next5(e) {
    // 获取当前页面上，点击的是第几个选项
    var a = Number(e.target.id)
    console.log(e.target.id),
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getQuestion',
        data: {},
        success: res => {
          console.log('[云函数] [getQuestion] questions: ', res.result.questions.data[4].questionList[a].is_true)
          // 答对没有！？
          if (res.result.questions.data[4].questionList[a].is_true) {
            // 对了就奖励加分！
              sum += res.result.questions.data[4].point,
              console.log(sum),
              goal++ ,
              wx.showToast({
                // 表扬一下你！
                title: '哈哈哈答对啦！',
                icon: 'success',
                duration: 2000
              })
          } else {
            // 错了？哼哼哼！
            wx.showToast({
              title: '错了嗷~ ',
              icon: 'none',
              duration: 500
            }),
              // 显示提示
              this.setData({
                showOneButtonDialog: true
              })
          }
          // 无情侩子手，下一题
          this.setData({
            five: "false",
            print: "true",
            tips: res.result.questions.data[4].hint,
            grade:sum,
            goal:goal
          })
        }
      })
  },

  tapDialogButton(e) {
    this.setData({
      showOneButtonDialog: false
    })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    this.setData({
      template: new Card().palette(),
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },



  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
