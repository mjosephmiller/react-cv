import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTopic } from '../actions/index';
import { bindActionCreators } from 'redux';

class TopicList extends Component {
  renderList() {
    return this.props.topics.map((topic) => {
      return (
        <a href="#"
          key={topic.title}
          onClick={() => this.props.selectTopic(topic)}
          className="list-group-item list-group-item-action">
          {topic.title}
        </a>
      );
    });
  }

  render() {
    return (
      <div className="topic-menu col-sm-3">
        <nav className="navbar navbar-default">
            <button className="hamburger hamburger--slider navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav nav-pills nav-stacked">
                    {this.renderList()}
                </ul>
            </div>
        </nav>
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
