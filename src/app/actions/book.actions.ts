import { Action, createAction, props, ActionType } from '@ngrx/store';
import { Book } from '../shared/models';

export enum BookAction {
  AddBook = '[Book List] Add Book',
  RemoveBook = '[Book Collection] Remove Book',
  RetrievedBook = '[Book List/API] Retrived Book',
  RetrievedBookListSuccess = '[Book List/API] Retrived Book Success',
  RetrievedBookListFail = '[Book List/API] Retrived Book Fail',
}

export const addBook = createAction(
  BookAction.AddBook,
  props<{ bookId: string }>()
);
export const removeBook = createAction(
  BookAction.RemoveBook,
  props<{ bookId: string }>()
);

export const retrievedBook = createAction(BookAction.RetrievedBook);

export const RetrievedBookListSuccess = createAction(
  BookAction.RetrievedBookListSuccess,
  props<{ books: Book[] }>()
);

export const retrievedBookListFail = createAction(
  BookAction.RetrievedBookListFail,
  props<{ error?: string }>()
);
