import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './book.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, action) => state.filter((id) => id !== action.bookId)),
  on(addBook, (state, action) => {
    if (state.indexOf(action.bookId) > -1) return state;

    return [...state, action.bookId];
  })
);
