import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  konkorBooks = [
    { id: 1, title: "دین و زندگی کامل کنکور" , price: "275,0000ريال" , pic: "/books/1.jpg" , favourite: false , cart: false },
    { id: 2, title: "زمین شناسی میکرو" , price: "255,0000ريال" , pic: "/books/2.jpg" , favourite: false ,cart: false },
    { id: 3, title: "ترجمه و تعریب" , price: "425,0000ريال" , pic: "/books/3.jpg" , favourite: false , cart: false , },
    { id: 4, title: "شیمی دوازدهم" , price: "325,0000ريال" , pic: "/books/4.jpg" , favourite: false , cart: false , },
    { id: 5, title: "فیزیک دوازدهم تجربی" , price: "370,0000ريال" , pic: "/books/5.jpg" , favourite: false , cart: false , },
    { id: 6, title: "دین و زندگی دوازدهم" , price: "225,0000ريال" , pic: "/books/6.jpg" , favourite: false , cart: false , },
    { id: 7, title: "فیزیک جامع" , price: "260,0000ريال" , pic: "/books/7.jpg" , favourite: false , cart: false , },
    { id: 8, title: "حسابان 2" , price: "540,0000ريال" , pic: "/books/8.jpg" , favourite: false, cart: false , },
    { id: 9, title: "فیزیک3 دوازدهم" , price: "430,0000ريال" , pic: "/books/9.jpg" , favourite: false , cart: false , },
    { id: 10, title: "روان شناسی جامع کنکور" , price: "330,0000ريال" , pic: "/books/10.jpg" , favourite: false , cart: false , },
  
  ]

}
