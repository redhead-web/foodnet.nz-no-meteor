import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buttonPopupComponent from './buttonPopup.component';

export default angular.module('buttonPopup', [
  uiRouter,
])

.component('buttonPopup', buttonPopupComponent)

.name;
