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
          className="list-group-item">
          {topic.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="list-group" style={{float: "left"}}>
        <ul className="list-group col-sm-12">
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

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectTopic is called, the result should be passed to all reducers
  return bindActionCreators({ selectTopic: selectTopic }, dispatch);
}

// promotes BookList from component to container, this makes selectBook available as prop to BookList
export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
