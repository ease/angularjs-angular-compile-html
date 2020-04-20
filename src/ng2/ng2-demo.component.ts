import {Component, Renderer2, ElementRef} from '@angular/core';


@Component({
  selector: 'ng2Demo',
  template: `
    <versionStamp></versionStamp>
    <ng1-demo [demoText]="demoText"></ng1-demo>
    <br>
    <br>
    <br>
    <br>
  `,
})
export class Ng2DemoComponent {
  static selector = 'ng2Demo';
  username = 'ngUpgrade';
  demoText: string;

  constructor (private renderer: Renderer2, private elementRef: ElementRef){}


  ngOnInit(){
      this.demoText = `@example1 @example2 @example3 @example4 @example5 @example6`;

      const transformedText = this.getTransformedText();
      let div = this.renderer.createElement('div') as HTMLDivElement;
      div.innerHTML = transformedText;
      console.log('ng2 div:', div);
      this.renderer.appendChild(this.elementRef.nativeElement, div);
  }

    getTransformedText(){
    let transformed = `Angular 2 Example: <br><a (click)="doSomething({id: 11})">@example1</a> <a (click)="doSomething({id: 22})">@example2</a> <a (click)="doSomething({id: 33})">@example3</a> <a (click)="doSomething({id: 44})">@example4</a> <a (click)="doSomething({id: 55})">@example5</a> <a (click)="doSomething({id: 66})">@example6</a>`;

    return transformed;
  }

    doSomething(argument){
      console.log('Should fire doSomething ng2:', argument)
  }
}
