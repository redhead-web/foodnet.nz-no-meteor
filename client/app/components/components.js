import angular from 'angular';
import Home from './home/home';
import Profile from './profile/profile';
import Organisation from './organisation/organisation';

const componentModule = angular.module('app.components', [
  Home,
  Profile,
  Organisation,
])

.name;

export default componentModule;
