import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchSuggestionsComponent from './searchSuggestions.component';

export default angular.module('searchSuggestions', [
  uiRouter,
])

.component('searchSuggestions', searchSuggestionsComponent)

.name;
