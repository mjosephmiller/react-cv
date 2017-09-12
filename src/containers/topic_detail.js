import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_topics';
import { createMarkup } from '../utils/util';
import { checkNeed } from '../utils/util';
import { formatItalics } from '../utils/util';
import { formatText } from '../utils/util';
import { formatBullets } from '../utils/util';

class TopicDetail extends Component {
  render() {
    if(!this.props.topic) {
      var firstTopic = TopicsReducer()[0]
      return (
        <div className="info col-sm-9">
          <h3>{firstTopic.title}</h3>
          {formatText(firstTopic.subTitle1Context)}
        </div>
      )
    }
    var topic = this.props.topic
    return (
      <div className="info col-sm-9">
        <h3 className="title">{topic.title}</h3>
        <p className="h4 edu-link" dangerouslySetInnerHTML={createMarkup(topic.eduLink1)} />
        {checkNeed(topic.subTitle1, 1)}
        {checkNeed(topic.dates)}
        {checkNeed(topic.subTitle1Summary)}
        {formatText(topic.subTitle1Context)}
        {formatBullets(topic.bullets)}
        <p className="h4 edu-link" dangerouslySetInnerHTML={createMarkup(topic.eduLink2)} />
        {checkNeed(topic.subTitle2, 1)}
        {checkNeed(topic.universityDates)}
        {checkNeed(topic.course)}
        {checkNeed(topic.subTitle2Summary)}
        {formatBullets(topic.bullets2)}
        {formatText(topic.subTitle2Context)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topic: state.activeTopic
  };
}

export default connect(mapStateToProps)(TopicDetail);
