import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformServer, ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  public isShown = false;

  constructor(private viewportScroller: ViewportScroller,
              @Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
