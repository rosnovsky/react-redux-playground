export default function (state = null, action) {
  //State is not app state, but the state that concerns the action
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;

}