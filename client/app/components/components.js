import angular from 'angular';
import Home from './home/home';
import LogIn from './logIn/logIn';
import Search from './search/search';
import Bookmarks from './bookmarks/bookmarks';
import Profile from './profile/profile';
import ProfileEdit from './profileEdit/profileEdit';
import Organisation from './organisation/organisation';
import OrganisationEdit from './organisationEdit/organisationEdit';
import Help from './help/help';

const componentModule = angular.module('app.components', [
  Home,
  LogIn,
  Search,
  Bookmarks,
  Profile,
  ProfileEdit,
  Organisation,
  OrganisationEdit,
  Help,
])

.name;

export default componentModule;
