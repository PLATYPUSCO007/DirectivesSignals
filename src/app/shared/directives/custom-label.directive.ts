import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color(value: string){
    this._color = value
    this.changeColor();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Iniciado Directiva ', el);
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Desde Directiva';
  }

  ngOnInit(): void {
    console.log('On Init');
    this.changeColor();
  }

  changeColor():void{
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

}
