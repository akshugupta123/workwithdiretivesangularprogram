import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReadonly]'
})
export class ReadonlyDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.readOnly = true;
  }

}
