import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-change-value',
  templateUrl: './productChangeValue.component.html',
})
export class pChangeValue implements OnChanges {
  @Input() stock!: number;
  @Input() productId!: number;
  @Output() onChangeValue = new EventEmitter();
  inputNumberStock!: number | null;
  color!: string;

  onChangeValued() {
    if (this.inputNumberStock != null) {
      this.onChangeValue.emit({
        productValue: this.inputNumberStock,
        id: this.productId,
      });
    }
    // console.log(this.inputNumberStock);
    // console.log(this.productId);
    this.inputNumberStock = null;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.productId);
    if (this.stock < 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
}
