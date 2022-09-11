import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import {
  addBook,
  BookAction,
  removeBook,
  RetrievedBookListSuccess,
} from './book.actions';
import { Book } from '../shared/models';

export interface BookState {
  books: Book[];
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: BookState = {
  books: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

//export const initialState: ReadonlyArray<Book> = [];
// on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
export const booksReducer = createReducer(
  initialState,
  on(BookActions.RetrievedBookListSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    books: action.books,
  }))
);
