import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import angular from 'angular';

class ng1DemoController {

  constructor(
    private $scope: angular.IScope,
    private $element: angular.IAugmentedJQuery,
    private $compile: angular.ICompileService
  ) {
    'ngInject';
  }

  $onInit(){
    // this.demoText = `@example1 @example2 @example3 @example4 @example5 @example6`;
    // Using demoText values to wrap them inside ng-click to be able to trigger AngularJS click
    // results in transformedText shown below

    const transformedText = this.getTransformedText();

    // then I manually tell AngularJS to compile the HTML from the string I've constructed above
    // while it preserves all the AngularJS' functionality such as ng-click:

      const content = `<span>${transformedText}</span>`;
      const html = angular
        .element('<div></div>')
        .html(content)
        .contents() as any;

      console.log('ng1 html:', html)

      this.$compile(html)(this.$scope);
      this.$element.html('').append(html);
  }

  getTransformedText(){
    let transformed = `Open Developer console and click on some of these mentions in order to see it in console: <br><br>AngularJS example:<br> <a ng-click="$ctrl.doSomething({id: 11})">@example1</a> <a ng-click="$ctrl.doSomething({id: 22})">@example2</a> <a ng-click="$ctrl.doSomething({id: 33})">@example3</a> <a ng-click="$ctrl.doSomething({id: 44})">@example4</a> <a ng-click="$ctrl.doSomething({id: 55})">@example5</a> <a ng-click="$ctrl.doSomething({id: 66})">@example6</a>`;

    return transformed;
  }

  doSomething(argument){
    console.log('Should fire doSomething ng1:', argument)
  }
}

export const ng1DemoComponent = {
  selector: 'ng1-demo',
  bindings: {
    demoText: '<',
  },
  controller: ng1DemoController,/*['$transclude', function ($transclude) {
    console.info($transclude);
  }],*/
  transclude: true
};

@Directive({
  selector: ng1DemoComponent.selector
})
export class Ng1DemoComponentFacade extends UpgradeComponent {
  @Input() demoText: string;

  constructor(elementRef: ElementRef, injector: Injector) {
    super(ng1DemoComponent.selector, elementRef, injector);
  }
}

