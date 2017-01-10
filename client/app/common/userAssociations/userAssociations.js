import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userAssociationsComponent from './userAssociations.component';

export default angular.module('userAssociations', [
  uiRouter,
])

.component('userAssociations', userAssociationsComponent)

.name;
