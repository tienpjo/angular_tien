import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { booksReducer } from '../actions/book.reducer';
import { ApiService } from '../api/api-service.service';
import { BooklistComponent } from './component/booklist.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from '../actions/book.effect';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BookEffect]),
  ],
  providers: [ApiService],
  exports: [],
})
export class BookModule {}
