import { Directive,
         OnInit,
         ElementRef,
         Renderer2,
         HostListener,
         HostBinding,
         Input } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective implements OnInit {

  @HostBinding('style.color') color: string;

  @Input() defaultColor: string = 'yellow';
  @Input() onHoverColor: string = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.color = 'red';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.color = this.onHoverColor;
  }

  @HostListener('mouseleave') mouseLevae() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'pink');
    this.color = this.defaultColor;
  }

}
