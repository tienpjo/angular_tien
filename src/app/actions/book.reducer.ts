import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import {
  addBook,
  BookAction,
  removeBook,
  RetrievedBookListSuccess,
} from './book.actions';
import { Book } from '../shared/models';
import { state } from '@angular/animations';
import { Actions } from '@ngrx/effects';

export interface BookState {
  books: Book[];
  isLoading: boolean;
  error?: boolean;
}

export const initialState: BookState = {
  books: [],
  isLoading: false,
  error: false,
};

//export const initialState: ReadonlyArray<Book> = [];
// on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
export const booksReducer = createReducer(
  initialState,
  on(BookActions.retrievedBook, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BookActions.RetrievedBookListSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    books: action.books,
  }))
);
