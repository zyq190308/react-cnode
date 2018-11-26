import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDetail } from '../../action'
import './style.css';

class Detail extends Component {
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
    componentDidMount() {
        this.props.getDetailObj(this.props.match.params.id);
    }
    render() {
        const detail = this.props.detail;
        return (
            <div className="detail">
                <div className="panel">
                    <div className="panel-header">
                        <span className="topic-full-title">{detail.title}</span>
                        <p className="title-desc">
                            <span>发布于&nbsp;{this.replyTime(detail.create_at)}&nbsp;</span>
                            <span>作者&nbsp;{detail.author.loginname}&nbsp;</span>
                            <span>{detail.visit_count}次浏览</span>
                        </p>
                    </div>             
                    <div className="panel-html" dangerouslySetInnerHTML={{__html: detail.content}}></div>
                </div>
                <div className="panel">
                    <div className="panel-header">
                        <span className="col_fade">{detail.reply_count}&nbsp;回复</span>
                    </div>
                    <div className="reply">
                        {
                            detail.replies.map((item,index) => (
                                <div className="reply-item" key={item.id}>
                                    <div className="author-content">
                                        <a href={"/users/" + item.author.loginname}><img src={item.author.avatar_url} alt="avatar" className="avatar"/></a>
                                        <div className="user-info">
                                            <a className="nick" href={"/users/" + item.author.loginname}>{item.author.loginname}</a>
                                            <a href={'#'+this.props.match.params.id}>{index+1}楼.{this.replyTime(item.create_at)}</a>
                                        </div>
                                        {
                                            item.ups.length> 0 ? <div className="user-action">点赞{item.ups.length}</div>:null
                                        }
                                        
                                    </div>
                                    <div className="reply-content">
                                        <div key={item.id} dangerouslySetInnerHTML={{__html: item.content}}></div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>  
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailObj(id) {
            dispatch(getDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

