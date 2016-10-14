import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_topics';

class TopicDetail extends Component {
  render() {
    if(!this.props.topic) {
      return (
        <div>
          <div>{TopicsReducer()[0].title}</div>
        </div>
      )
    }
    return (
      <div>
        <div>{this.props.topic.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topic: state.activeTopic
  };
}

export default connect(mapStateToProps)(TopicDetail);
