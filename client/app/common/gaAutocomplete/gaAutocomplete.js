import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gaAutocompleteComponent from './gaAutocomplete.component';

export default angular.module('gaAutocomplete', [
  uiRouter,
])

.directive('gaAutocomplete', gaAutocompleteComponent)

.name;
