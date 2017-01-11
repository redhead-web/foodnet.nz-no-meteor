import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditSkillsComponent from './profileEditSkills.component';

export default angular.module('profileEditSkills', [
  uiRouter,
])

.component('profileEditSkills', profileEditSkillsComponent)

.name;
