 export function selectTopic(topic){
  // selectTopic is an ActionCreator that returns an action,
  // an object with a type property
  return {
    type: "TOPIC_SELECTED",
    payload: topic
  };
}
