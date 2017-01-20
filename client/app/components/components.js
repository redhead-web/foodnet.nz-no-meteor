import angular from 'angular';
import Home from './home/home';
import LogIn from './logIn/logIn';
import Search from './search/search';
import Bookmarks from './bookmarks/bookmarks';
import Profile from './profile/profile';
import ProfileEdit from './profileEdit/profileEdit';
import Organisation from './organisation/organisation';
import OrganisationEdit from './organisationEdit/organisationEdit';
import OrganisationAuth from './organisationAuth/organisationAuth';
import OrganisationCreate from './organisationCreate/organisationCreate';
import Help from './help/help';
import sidebar from './sidebar/sidebar';

const componentModule = angular.module('app.components', [
  Home,
  LogIn,
  Search,
  Bookmarks,
  Profile,
  ProfileEdit,
  Organisation,
  OrganisationEdit,
  OrganisationAuth,
  OrganisationCreate,
  Help,
  sidebar,
])

.name;

export default componentModule;
