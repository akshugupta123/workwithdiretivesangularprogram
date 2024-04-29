import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoWhitespace]'
})
export class NoWhitespaceDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const isWhitespace = event.key === ' ';
    if (isWhitespace) {
      event.preventDefault();
    }
  }

}
