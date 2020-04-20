import {Component, VERSION} from '@angular/core';
import angular from 'angular';


@Component({
  selector: 'versionStamp',
  template: `
    <div class="version-container">
      <span class="version angularjs">AngularJS v{{ versions.angularjs }}</span>
      <span class="version angular">Angular v{{ versions.angular }}</span>
    </div>
  `,
  styles: [
    `
      .version-container {
        border-bottom: 1px solid lightgray;
        color: gray;
        display: flex;
        justify-content: space-between;
        margin: 0 0 5px;
       padding: 25px 0 5px;
      }
      .version {
        font-size: 0.75em;
        font-style: italic;
      }
    `,
  ],
})
export class VersionStampComponent {
  versions = {
    angularjs: angular.version.full,
    angular: VERSION.full
  };
}
