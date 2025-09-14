import { Component, inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { BookAddComponent } from "./book-add/book-add.component";

@Component({
  selector: 'app-book-management',
  imports: [BookAddComponent],
  templateUrl: './book-management.component.html',
  styleUrl: './book-management.component.scss'
})


export class BookManagementComponent implements OnInit {
  ngOnInit(): void {
    this.refresh();
  }
  async ok_add(book: Book) {

    if (this.action == "add") {
      await this.bookServic.add_book(book);
    }
    else if (this.action == "edit") {
      await this.bookServic.edit(this.selectedId, book);

    }
    else if (this.action == "remove") {
      await this.bookServic.remove(this.selectedId);
    }
    await this.refresh();
    this.action = "home";
  }
  close() {
    this.action = "home";
  }
  adding() {
    this.selected = undefined;
    this.action = "add"
  }
  edit(book: Book) {
    this.selected = { ...book };
    this.selectedId = book.id;
    this.action = "edit"
  }
  async refresh() {
    this.dataSource = await this.bookServic.list();
  }
  action = "home";
  selected: Book | undefined;
  selectedId: string = "";
  bookServic = inject(BookService);

  dataSource: any;

  remove(book: Book) {
    this.selected = { ...book };
    this.selectedId = book.id;
    this.action = "remove";
  }
}
