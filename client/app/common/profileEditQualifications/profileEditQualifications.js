import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditQualificationsComponent from './profileEditQualifications.component';

export default angular.module('profileEditQualifications', [
  uiRouter,
])

.component('profileEditQualifications', profileEditQualificationsComponent)

.name;
