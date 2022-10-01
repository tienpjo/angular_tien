import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../shared/models';
import { AppState } from './book.state';

export const selectFeature = (state: AppState) => state.books;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const booksSelector = createSelector(
  selectFeature,
  (state) => state.books
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
// export const collectionSelector =
//   createFeatureSelector<ReadonlyArray<string>>('collection');

// export const selectBooks = createFeatureSelector<Book>('books');

// export const selectCollectionState =
//   createFeatureSelector<ReadonlyArray<string>>('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );
