import { Component } from '@angular/core';
import { ProductsComponent } from "../../../../components/products/ui/products.component";

@Component({
  selector: 'app-books',
  imports: [ProductsComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

}
