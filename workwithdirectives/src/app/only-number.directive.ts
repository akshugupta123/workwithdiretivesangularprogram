import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const isNumber = /^[0-9]$/g.test(event.key);
    if (!isNumber) {
      event.preventDefault();
    }
  }

}
