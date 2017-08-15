import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_topics';
// import '../../style/style.css'

class TopicDetail extends Component {
  render() {
    if(!this.props.topic) {
      return (
        <div className="info">
          <h3>{TopicsReducer()[0].title}</h3>
          <div>{TopicsReducer()[0].subTitle1Context}</div>
        </div>
      )
    }
    var topic = this.props.topic
    return (
      <div className="info">
        <h3 className="title">{topic.title}</h3>
        <div className="edu-link" dangerouslySetInnerHTML={createMarkup(topic.eduLink1)} />
        {checkNeed(topic.subTitle1)}
        <h6 className="subtitle">{topic.dates}</h6>
        <h6 className="summary">{topic.subTitle1Summary}</h6>
        <p className="bullets">{topic.subTitle1Context}</p>
        <div className="edu-link" dangerouslySetInnerHTML={createMarkup(topic.eduLink2)} />
        {checkNeed(topic.subTitle2)}
        <h6 className="subtitle">{topic.universityDates}</h6>
        <p className="subtitle">{topic.course}</p>
        <p className="bullets">{topic.subTitle2Context}</p>
        <h5 className="subtitle">{topic.school}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topic: state.activeTopic
  };
}

function createMarkup(link) {
  return {
    __html: link
  };
}

function checkNeed(topic_attr){
  if(!topic_attr) {
    return null
  }
    return (
      <h5 className="subtitle">{topic_attr}</h5>
    )
}

export default connect(mapStateToProps)(TopicDetail);
