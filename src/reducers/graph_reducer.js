const graphReducer = (state = "", action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_CATEGORY:
    //   return action.category;
    // case UNMOUNT_CATEGORY:
    //   return "All";
    default:
      return state;
  }
};

export default graphReducer;
