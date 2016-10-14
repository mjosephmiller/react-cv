import { combineReducers } from 'redux';
import TopicsReducer from './reducer_topics';
import ActiveTopic from './reducer_active_topic';

const rootReducer = combineReducers({
  topics: TopicsReducer,
  activeTopic: ActiveTopic
});

export default rootReducer;
