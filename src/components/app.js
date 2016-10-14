import React, { Component } from 'react';

import TopicList from '../containers/topic_list';
import TopicDetail from '../containers/topic_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopicList />
        <TopicDetail />
      </div>
    );
  }
}
