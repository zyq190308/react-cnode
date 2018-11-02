import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

import './style.css';
import { getTopics } from '../../api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
            limit: 30,
            tab: ''
        };
        this.handlePre = this.handlePre.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handlePre() {
        if(this.state.page<=1)
            return
            this.setState(preState => ({
                page: --preState.page
            }), () => {
                this.getTopics()
            })
    }
    handleNext() {
        this.setState(preState => ({
            page: ++preState.page
        }), () => {
            this.getTopics()
        })
    }
    replyTime(value) {
        if (!value) {
            return ''
          }
          let date = new Date(value)
          let time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
          if (time < 0) {
            return ''
          } else if ((time / 1000 < 30)) {
            return '刚刚'
          } else if (time / 1000 < 60) {
            return parseInt((time / 1000)) + '秒前'
          } else if ((time / 60000) < 60) {
            return parseInt((time / 60000)) + '分钟前'
          } else if ((time / 3600000) < 24) {
            return parseInt(time / 3600000) + '小时前'
          } else if ((time / 86400000) < 31) {
            return parseInt(time / 86400000) + '天前'
          } else if ((time / 2592000000) < 12) {
            return parseInt(time / 2592000000) + '月前'
          } else {
            return parseInt(time / 31536000000) + '年前'
          }
    }
    getTopicByType(type) {
        this.setState({
            page: 1,
            tab: type
        }, () => {
            this.getTopics()
        })
    }
    getTopics() {
        let params = {
            page: this.state.page,
            limit: this.state.limit,
            tab: this.state.tab
        }
        getTopics(params).then(res => {
            const { status, data } = res;
            if(status === 200) {
                this.setState({
                    list: data.data
                });
            }
        })
    }
    componentDidMount() {
        this.getTopics()
    }
    render() {
        return (
            <div>
                <div className="main-header">
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('all') }}>全部</a>
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('good') }}>精华</a>
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('share') }}>分享</a>
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('ask') }}>问答</a>
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('job') }}>招聘</a>
                    <a href="javascript:void(0)" className="topic-tab" onClick={() => { this.getTopicByType('dev') }}>客户端测试</a>
                </div>
                {
                    this.state.list.map((item) => (
                        <div className="main-content" key={item.id}>
                            <div className="cell" key={item.id}>
                                <a href="#" className="pull-left"><img src={item.author.avatar_url} title="avatar"/></a>
                                <span className="reply_count pull-left">
                                    <span className="count_of_replies">{item.reply_count}</span>
                                    <span className="count_seperator">/</span>
                                    <span className="count_of_visits">{item.visit_count}</span>
                                </span>
                                <a href="#" className="last_time pull-right">
                                    <span className="last_active_time">{this.replyTime(item.last_reply_at)}</span>
                                </a>
                                <span className="put_top">置顶</span>
                                <Link className="topic_title" title={item.title} to={`/Detail/${item.id}`}>
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    ))
                }
                
                <div className="pagination-wrap">
                    <Button type="primary" onClick={this.handlePre} disabled={this.state.page===1}>上一页</Button>
                    <Button type="primary" onClick={this.handleNext} disabled={this.state.limit<30}>下一页</Button>
                </div>
            </div>
        )
    }
}

export default Home;