// 展示组件
import React, { Component } from 'react';
class CommentList extends Component{
  constructor(props) {
    super(props);
  }

  renderComment({
    body,
    author
  }) {
    return <li>{body}—{author}</li>;
  }

  render() {
    return <ul> {this.props.comments.map(this.renderComment)} </ul>;
  }

}

// 容器组件
export default class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: comments
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}

const comments = [{
  body: 'React is great!',
  author: 'Facebook'
}, {
  body: 'PHP is the best programming language!',
  author: 'anonym'
}]


