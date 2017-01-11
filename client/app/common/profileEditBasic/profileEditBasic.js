import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditBasicComponent from './profileEditBasic.component';

export default angular.module('profileEditBasic', [
  uiRouter,
])

.component('profileEditBasic', profileEditBasicComponent)

.name;
