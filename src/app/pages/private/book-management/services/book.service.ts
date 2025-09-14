import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  lastId = 1;

  http = inject(HttpClient);

  async list() {
    return await this.http.get('http://localhost:5093/v1/books/list').toPromise();
  }


  async add_book(book: Book) {
    // book.id = this.lastId++;
    // this._books.push(book);
    await this.http.post('http://localhost:5093/v1/books/create',book).toPromise();
  }
  async edit(id: string, book: Book) {
    // let index = this._books.indexOf(this._books.filter(x => x.id == id)[0])
    // this._books[index] = book;
    await this.http.put('http://localhost:5093/v1/books/update'+id,book).toPromise();

  }
  async remove(id: string) {
    
    await this.http.delete('http://localhost:5093/v1/books/remove'+id).toPromise();

  }

}
