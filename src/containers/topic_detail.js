import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_topics';
import { createMarkup } from '../utils/util';

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

function checkNeed(topic_attr, subtitle){
  if(!topic_attr) {
    return null
  }
  else if(topic_attr && subtitle == 1) {
    return <h4 className="subtitle">{topic_attr}</h4>
  }
  else {
    return <p className="text">{topic_attr}</p>
  }
}

function formatItalics(substr){
  return (<i key={substr[0]}>{substr}</i>);
}

function formatText(topic_attr){
  if(!topic_attr) {
    return null
  }
  var br = topic_attr.map(function(string, index) {
      var stringIndex = string.indexOf("- I'm nothing if not persevering.")
      if(stringIndex === -1){
        return(<p key={index}>{string}<br/></p>)
      }
      else{
        var substr = string.slice(stringIndex)
        var italicised = formatItalics(substr)
        return(<p key={stringIndex}>{string.replace(substr, '')}{italicised}<br/></p>)
      }
  });
  return (<div>{ br }</div>);
}

function formatBullets(topic_attr){
  if(!topic_attr) {
    return null
  }
  var bullets = topic_attr.map(function(bullet, index) {
      return (
        <li key={index}>{bullet}</li>
      );
  });
  return (<ul>{ bullets }</ul>);
}

export default connect(mapStateToProps)(TopicDetail);
