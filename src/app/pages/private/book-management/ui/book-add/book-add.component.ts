import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Book } from '../../models/book.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  imports: [
    FormsModule

  ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.scss'
})
export class BookAddComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data = this.current;
    }
  }
  ok() {
    this.onOk.emit(this.data);
  }
  back() {
    this.onCancel.emit();
  }
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<Book>();
  @Input() current: Book | undefined;
  @Input() actionName = "";
  data: Book = { id: "", author: "", price: 0, publisher: "", title: "" }
}
