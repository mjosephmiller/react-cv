import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_topics';
// import '../../style/style.css'

class TopicDetail extends Component {
  render() {
    if(!this.props.topic) {
      return (
        <div>
          <h3>{TopicsReducer()[0].title}</h3>
          <div>{TopicsReducer()[0].subTitle1Context}</div>
        </div>
      )
    }
    return (
      <div className="info">
        <h3 className="title">{this.props.topic.title}</h3>
        <h5 className="subtitle">{this.props.topic.subTitle1}</h5>
        <h6 className="subtitle">{this.props.topic.dates}</h6>
        <h6 className="summary">{this.props.topic.subTitle1Summary}</h6>
        <p className="bullets">{this.props.topic.subTitle1Context}</p>
        <h5 className="subtitle">{this.props.topic.subTitle2}</h5>
        <h6 className="subtitle">{this.props.topic.universityDates}</h6>
        <p className="subtitle">{this.props.topic.course}</p>
        <p className="bullets">{this.props.topic.subTitle2Context}</p>
        <h5 className="subtitle">{this.props.topic.school}</h5>
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
