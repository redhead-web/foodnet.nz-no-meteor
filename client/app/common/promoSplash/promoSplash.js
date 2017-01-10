import angular from 'angular';
import uiRouter from 'angular-ui-router';
import promoSplashComponent from './promoSplash.component';

export default angular.module('promoSplash', [
  uiRouter,
])

.component('promoSplash', promoSplashComponent)

.name;
