export default function(state = null, action) {
  switch(action.type) {
    case "TOPIC_SELECTED":
      return action.payload;
  }
  return state;
}
