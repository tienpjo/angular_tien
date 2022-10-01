import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../shared/models';
import { AppState } from '../../actions/book.state';
import * as BookActions from '../../actions/book.actions';
import {
  errorSelector,
  isLoadingSelector,
  booksSelector,
} from '../../actions/books.selectors';
import { select, Store } from '@ngrx/store';
import { ApiService } from 'src/app/api/api-service.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books$: Observable<Book[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<boolean | undefined>;

  constructor(private store: Store<AppState>, private bookService: ApiService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.books$ = this.store.pipe(select(booksSelector));
  }
  onShow() {}
  ngOnInit(): void {
    this.store.dispatch(BookActions.retrievedBook());
  }
}
