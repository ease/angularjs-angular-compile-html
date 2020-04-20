import {downgradeComponent} from '@angular/upgrade/static';
import angular from 'angular';
import {Ng2DemoComponent} from '../ng2/ng2-demo.component';
import {ng1DemoComponent} from './ng1-demo.component';


export const ng1DemoModule = angular.
  module('ng1Demo', []).
  component(ng1DemoComponent.selector, ng1DemoComponent).
  directive(Ng2DemoComponent.selector, downgradeComponent({
    component: Ng2DemoComponent,
  }));
