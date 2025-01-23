import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHTMLDirective implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}


@Pipe({name: 'safeURL'})
export class SafeURLDirective implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
