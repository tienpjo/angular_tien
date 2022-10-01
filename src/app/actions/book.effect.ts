import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../api/api-service.service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffect {
  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.retrievedBook),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => BookActions.RetrievedBookListSuccess({ books })),
          catchError((error) =>
            of(BookActions.retrievedBookListFail({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private booksService: ApiService) {}
}
