import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTopic } from '../actions/index';
import { bindActionCreators } from 'redux';

class TopicList extends Component {
  renderList() {
    return this.props.topics.map((topic) => {
      return (
        <li
          key={topic.title}
          onClick={() => this.props.selectTopic(topic)}
          className="list-group-item list-group-item-action">
          {topic.title}
        </li>
      );
    });
  }

  render() {
    return (
    <div className="topic-menu col-sm-3">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

// anything returned from this function will end up as props on the TopicList container
function mapDispatchToProps(dispatch) {
  // whenever selectTopic is called, the result should be passed to all reducers
  return bindActionCreators({ selectTopic: selectTopic }, dispatch);
}

// promotes TopicList from component to container, this makes selectBook available as prop to TopicList
export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
