import React, { Component } from 'react';

import { getTopicDetail } from '../../api';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }
    getTopicDetail() {
        getTopicDetail({
            id: this.props.match.params.id
        }).then(res => {
            const { status, data } = res;
            if(status === 200) {
                this.setState({
                    detail: data.data
                })
            }
        })
    }
    componentDidMount() {
        this.getTopicDetail()
    }
    render() {
        const { content } = this.state.detail
        return (
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        )
    }
}

export default Detail;


