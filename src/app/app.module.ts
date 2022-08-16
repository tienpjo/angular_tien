import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './component/header/header.component';
// import { PostCreateComponent } from './component/post-create/post-create.component';
// import { PostListComponent } from './component/post-list/post-list.component';
import { Product } from './component/product/product.component';
import { pChangeValue } from './component/productChangeValue/productChangeValue.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    // PostCreateComponent,
    // PostListComponent,
    Product,
    pChangeValue,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
