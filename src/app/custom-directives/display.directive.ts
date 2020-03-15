import { Directive, 
         TemplateRef, 
         ViewContainerRef, 
         Input } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  @Input() set appDisplay(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { }

}
