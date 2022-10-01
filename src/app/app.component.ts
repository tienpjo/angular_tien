import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './actions/book.state';
import { ApiService } from './api/api-service.service';
import {
  booksSelector,
  errorSelector,
  isLoadingSelector,
} from './actions/books.selectors';

import { DOCUMENT } from '@angular/common';
import { Inject, InjectFlags, InjectionToken } from '@angular/core';
import {
  addBook,
  BookAction,
  removeBook,
  RetrievedBookListSuccess,
} from './actions/book.actions';

import { Book } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private booksService: ApiService, private store: Store) {}
  local_storage = new InjectionToken<Storage | null>('local_storage', {
    factory: () => {
      const document = inject(DOCUMENT, InjectFlags.Optional);
      console.log(document?.defaultView?.localStorage);
      return null;
    },
  });
  ngOnInit() {}

  saveData() {}
}
