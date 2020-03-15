import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
  }

}
