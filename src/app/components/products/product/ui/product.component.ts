import { Component, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { BooksService } from '../../../../pages/public/service/books.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  addToCart(x:any) {
    x.cart = true;
  }
  @Input() product: any;

}
