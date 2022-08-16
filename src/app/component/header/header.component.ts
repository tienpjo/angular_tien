import { Component, OnInit } from '@angular/core';
import { delay, take } from 'rxjs';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
