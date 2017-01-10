import angular from 'angular';
import Navbar from './navbar/navbar';
import PromoSplash from './promoSplash/promoSplash';
import SearchBar from './searchBar/searchBar';
import SearchCommon from './searchCommon/searchCommon';
import OrganisationList from './organisationList/organisationList';
import OrganisationSplash from './organisationSplash/organisationSplash';
import OrganisationSummary from './organisationSummary/organisationSummary';
import OrganisationDashboardInfo from './organisationDashboardInfo/organisationDashboardInfo';
import OrganisationDashboardIO from './organisationDashboardIO/organisationDashboardIO';
import OrganisationAvatar from './organisationAvatar/organisationAvatar';
import IOInputList from './iOInputList/iOInputList';
import IOOutputList from './iOOutputList/iOOutputList';
import IOAvatar from './iOAvatar/iOAvatar';
import User from './user/user';
import UserInfo from './userInfo/userInfo';
import UserAssociations from './userAssociations/userAssociations';
import UserSkills from './userSkills/userSkills';
import UserAvatar from './userAvatar/userAvatar';
import SkillList from './skillList/skillList';
import SkillAvatar from './skillAvatar/skillAvatar';


const commonModule = angular.module('app.common', [
  Navbar,
  PromoSplash,
  SearchBar,
  SearchCommon,
  OrganisationList,
  OrganisationSplash,
  OrganisationSummary,
  OrganisationDashboardInfo,
  OrganisationDashboardIO,
  OrganisationAvatar,
  IOInputList,
  IOOutputList,
  IOAvatar,
  User,
  UserInfo,
  UserAssociations,
  UserSkills,
  UserAvatar,
  SkillList,
  SkillAvatar,
])

.name;

export default commonModule;
