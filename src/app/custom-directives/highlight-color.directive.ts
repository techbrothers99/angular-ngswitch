import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective implements OnInit {

  @HostBinding('style.color') color: string = 'pink';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.color = 'red';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseLevae() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
    this.color = 'pink';
  }

}
