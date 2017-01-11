import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditLinksComponent from './profileEditLinks.component';

export default angular.module('profileEditLinks', [
  uiRouter,
])

.component('profileEditLinks', profileEditLinksComponent)

.name;
