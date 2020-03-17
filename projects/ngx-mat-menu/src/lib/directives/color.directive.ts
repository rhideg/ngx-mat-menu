import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgxMatMenuService } from '../ngx-mat-menu.service';
import { NgxMatMenuComponent } from '../ngx-mat-menu.component';

@Directive({
  selector: '[libColor]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef,
              private menucomp: NgxMatMenuComponent) { }

  

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.menucomp.badgeColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }
  
}
