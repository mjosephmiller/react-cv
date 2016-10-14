export function selectTopic(topic){
  return {
    type: "TOPIC_SELECTED",
    payload: topic
  };
}
