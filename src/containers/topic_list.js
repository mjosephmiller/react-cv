import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopicList extends Component {
  renderList() {
    return this.props.topics.map((topic) => {
      return (
        <li key={topic.title} className="list-group-item">{topic.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

export default connect(mapStateToProps)(TopicList);
