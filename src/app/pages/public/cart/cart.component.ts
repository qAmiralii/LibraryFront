import { Component, inject } from '@angular/core';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
addToCart($event: MouseEvent) {
throw new Error('Method not implemented.');
}
  carts = inject(BooksService)
  products: any[] = this.carts.konkorBooks.filter(x => x.cart == true)
}
