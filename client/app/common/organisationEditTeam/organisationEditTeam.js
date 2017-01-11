import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditTeamComponent from './organisationEditTeam.component';

export default angular.module('organisationEditTeam', [
  uiRouter,
])

.component('organisationEditTeam', organisationEditTeamComponent)

.name;
