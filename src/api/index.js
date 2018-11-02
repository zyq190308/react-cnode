import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    // timeout: 10000
  });

export const getTopics = (params) => instance.get('topics', { params });//获取主题
export const getTopicDetail = (params) => instance.get(`/topic/${params.id}`, { params });//获取主题详情
export const createTopic = (params) => instance.post('topics', params);//创建主题
export const collectTopic = (params) => instance.post('/topic_collect/collect', params);//收藏主题
export const cancleTopic = (params) => instance.post('/topic_collect/de_collect', params);//取消主题
export const topicsCollectByUser = (params) => instance.get(`/topic_collect/${params.userName}`, { params });//用户收藏的主题
export const newComment = (params) => instance.post(`/topic/${params.topic_id}/replies`, params);//新建评论
export const upComment = (params) => instance.post(`/reply/${params.reply_id}/ups`, params);//点赞评论
export const userProfile = (params) => instance.post(`/user/${params.loginname}`, params);//用户详情
export const accessToken = (params) => instance.post(`accesstoken`, params);//验证 accessToken 的正确性
export const unReadMsgCount = () => instance.get('/message/count');//获取未读消息数
export const getMsg = () => instance.get('/message');//获取已读和未读消息
export const markAll = () => instance.post('/message/mark_all');//标记全部已读
export const markOne = (params) => instance.post(`/message/mark_one/${params.msg_id}`);//标记单个已读





