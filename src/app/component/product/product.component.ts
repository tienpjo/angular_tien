import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class Product implements OnInit {
  products: any[] = [];
  title = 'Product';
  @Output() productCreated = new EventEmitter();
  productToUpdate: any = [];
  ngOnInit(): void {
    this.products = this.getProduct();
  }
  getProduct() {
    return [
      { id: '1', title: 'Screw Driver', price: 400, stock: 11 },
      { id: '2', title: 'Nut Volt', price: 200, stock: 5 },
      { id: '3', title: 'Resistor', price: 78, stock: 45 },
      { id: '4', title: 'Tractor', price: 20000, stock: 1 },
      { id: '5', title: 'Roller', price: 62, stock: 15 },
    ];
  }
  changeValued(p: any) {
    // console.log(p);
    this.productToUpdate = this.products.find((ID) => ID.id === p.id);
    console.log(this.productToUpdate);
    this.productToUpdate.stock = this.productToUpdate.stock + p.productValue;
  }

  findProductById(p: any) {}
}
