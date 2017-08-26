import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;