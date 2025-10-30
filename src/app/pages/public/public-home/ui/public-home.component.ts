import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-public-home',
  imports: [],
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.scss'
})
export class PublicHomeComponent implements OnInit, OnDestroy {
  images = [
    { src: '/books/1.jpg', alt: 'Photo 1', name:'دین و زندگی' },
    { src: '/books/2.jpg', alt: 'Photo 2', name:'زمین شناسی' },
    { src: '/books/3.jpg', alt: 'Photo 3', name:'ترجمه' },
    { src: '/books/4.jpg', alt: 'Photo 4', name:'شیمی' },
    { src: '/books/5.jpg', alt: 'Photo 5', name:'فیزیک' },
    { src: '/books/6.jpg', alt: 'Photo 6', name:'دین و زندگی' },
    { src: '/books/7.jpg', alt: 'Photo 7', name:'دین و زندگی جامع' }
  ];

  currentIndex = 0;
  isAnimating = false;
  private autoPlayInterval: any;

  // متد کمکی برای محاسبه در تمپلیت
  shouldBeHidden(i: number): boolean {
    return Math.abs(i - this.currentIndex) > 2;
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  prevSlide() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  goToSlide(index: number) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    
    this.currentIndex = index;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.stopAutoPlay();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.startAutoPlay();
  }
}
