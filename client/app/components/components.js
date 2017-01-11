import angular from 'angular';
import Home from './home/home';
import Profile from './profile/profile';
import Organisation from './organisation/organisation';
import OrganisationEdit from './organisationEdit/organisationEdit';

const componentModule = angular.module('app.components', [
  Home,
  Profile,
  Organisation,
  OrganisationEdit,
])

.name;

export default componentModule;
