import { combineReducers } from 'redux';
import TopicReducer from './reducer_topics'

const rootReducer = combineReducers({
  topic: TopicsReducer
});

export default rootReducer;
