import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appClickOnce]'
})
export class ClickOnceDirective implements AfterViewInit {
  // <button (appClickOnce)="rateUp"></button>
  // nach 1. click
  // <button (appClickOnce)="rateUp" disabled></button>

  // API - @Input/@Output
  @Output() appClickOnce = new EventEmitter<MouseEvent>();
  // Felder
  // Constructor
  // Methoden durch Interface
  // Eigenen Klassenmethoden

  constructor(
    private renderer: Renderer2,
    private element: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    const unsubscribe = this.renderer.listen(
      this.element.nativeElement,
      'click',
      event => this.raiseEventAndDisableElement(event, unsubscribe)
    );
  }

  private raiseEventAndDisableElement(
    clickEvent: MouseEvent,
    unsubscribe: () => void
  ) {
    this.appClickOnce.emit(clickEvent);
    this.renderer.setAttribute(this.element.nativeElement, 'disabled', '');
    unsubscribe();
  }
}
