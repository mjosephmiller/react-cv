import { combineReducers } from 'redux';
import TopicsReducer from './reducer_topics'

const rootReducer = combineReducers({
  topic: TopicsReducer
});

export default rootReducer;
