import { Component, inject } from '@angular/core';
import { BooksService } from '../../../pages/public/service/books.service';
import { ProductComponent } from "../product/ui/product.component";
import { X } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  buy: any[] = [];   
  products = inject(BooksService)

}
