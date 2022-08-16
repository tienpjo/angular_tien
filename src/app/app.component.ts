import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedPost: any[] = [];
  onChangeAdded(post: any) {
    console.log(post);
    this.storedPost.push(post);
  }
}
