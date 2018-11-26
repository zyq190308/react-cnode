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
            tab: 'all'
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
    judgeType(item) {
        let top = item.top
        let good = item.good
        let tab = this.state.tab
        if(top) {
            return '置顶'
        }else if(good) {
            return '精华'
        }else if(tab==='all'&&item.tab==='ask') {
            return '问答'
        }else if(tab==='all'&&item.tab==='share') {
            return '分享'
        }
    }
    componentDidMount() {
        this.getTopics()
    }
    render() {
        let active = this.state.tab;
        return (
            <div>
                <div className="main-header">
                    <span className={"topic-tab "+  (active ==='all'? 'active' : '')} onClick={() => { this.getTopicByType('all') }}>全部</span>
                    <span className={"topic-tab "+  (active ==='good'? 'active' : '')} onClick={() => { this.getTopicByType('good') }}>精华</span>
                    <span className={"topic-tab "+  (active ==='share'? 'active' : '')} onClick={() => { this.getTopicByType('share') }}>分享</span>
                    <span className={"topic-tab "+  (active ==='ask'? 'active' : '')} onClick={() => { this.getTopicByType('ask') }}>问答</span>
                    <span className={"topic-tab "+  (active ==='job'? 'active' : '')} onClick={() => { this.getTopicByType('job') }}>招聘</span>
                    <span className={"topic-tab "+  (active ==='dev'? 'active' : '')} onClick={() => { this.getTopicByType('dev') }}>客户端测试</span>
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
                                <span className={"put_top "+ (item.good!==true&&item.top!==true?'put_top_gray':'')}>{this.judgeType(item)}</span>
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