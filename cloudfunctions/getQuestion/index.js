// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  
  const wxContext = cloud.getWXContext()
    const questions = await db.collection('question').where({
      use_status: true
    })
    .get()
    
  
  return {
    questions: questions,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}