import React, { Component } from 'react';
import TopicList from '../containers/topic_list';
import TopicDetail from '../containers/topic_detail';
import { createMarkup } from '../utils/util';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
          <div className="row">
            <TopicList />
            <TopicDetail />
            <div className="info col-sm-3">
            </div>
            <div className="info col-sm-9">
              < hr/>
              <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>{' '}
              <div className="h4 edu-link" style={{display: 'inline-block'}} dangerouslySetInnerHTML={createMarkup("<a href='mailto:hello@mikeymiller.co'>hello@mikeymiller.co</a>")} />
            </div>
          </div>
      </div>
    );
  }
}

