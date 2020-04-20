import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import angular from 'angular';
import {Ng2DemoModule} from './ng2/ng2-demo.module';

// Ensure AngularJS destroys itself on hot reloads.
const rootElement = angular.element(document.body);
const oldInjector = rootElement.injector();
if (oldInjector) {
  oldInjector.get('$rootScope').$destroy();
  rootElement.data('$injector', null);
}

// Ensure Angular destroys itself on hot reloads.
if (window['ngRef']) {
  window['ngRef'].destroy();
}

platformBrowserDynamic().
  bootstrapModule(Ng2DemoModule).
  then(ref => window['ngRef'] = ref).
  catch(console.error);
