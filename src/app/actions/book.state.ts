import { Book } from '../shared/models';
import { BookState } from './book.reducer';

export interface AppState {
  books: BookState;
  //collection: ReadonlyArray<string>;
}
