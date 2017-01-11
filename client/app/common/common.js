import angular from 'angular';
import Navbar from './navbar/navbar';
import PromoSplash from './promoSplash/promoSplash';
import SearchBar from './searchBar/searchBar';
import SearchCommon from './searchCommon/searchCommon';
import ProfileEditBasic from './profileEditBasic/profileEditBasic';
import ProfileEditOrganisations from './profileEditOrganisations/profileEditOrganisations';
import ProfileEditSkills from './profileEditSkills/profileEditSkills';
import ProfileEditLinks from './profileEditLinks/profileEditLinks';
import OrganisationList from './organisationList/organisationList';
import OrganisationListSmall from './organisationListSmall/organisationListSmall';
import OrganisationSplash from './organisationSplash/organisationSplash';
import OrganisationSummary from './organisationSummary/organisationSummary';
import OrganisationLocation from './organisationLocation/organisationLocation';
import OrganisationTeam from './organisationTeam/organisationTeam';
import OrganisationInfo from './organisationInfo/organisationInfo';
import OrganisationDashboardHome from './organisationDashboardHome/organisationDashboardHome';
import OrganisationDashboardInfo from './organisationDashboardInfo/organisationDashboardInfo';
import OrganisationDashboardIO from './organisationDashboardIO/organisationDashboardIO';
import OrganisationAvatar from './organisationAvatar/organisationAvatar';
import OrganisationEditBasic from './organisationEditBasic/organisationEditBasic';
import OrganisationEditBranding from './organisationEditBranding/organisationEditBranding';
import OrganisationEditLocations from './organisationEditLocations/organisationEditLocations';
import OrganisationEditDescription from './organisationEditDescription/organisationEditDescription';
import OrganisationEditTeam from './organisationEditTeam/organisationEditTeam';
import OrganisationEditInputs from './organisationEditInputs/organisationEditInputs';
import OrganisationEditOutputs from './organisationEditOutputs/organisationEditOutputs';
import OrganisationEditLinks from './organisationEditLinks/organisationEditLinks';
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
  ProfileEditBasic,
  ProfileEditOrganisations,
  ProfileEditSkills,
  ProfileEditLinks,
  OrganisationList,
  OrganisationListSmall,
  OrganisationSplash,
  OrganisationSummary,
  OrganisationLocation,
  OrganisationTeam,
  OrganisationInfo,
  OrganisationDashboardHome,
  OrganisationDashboardInfo,
  OrganisationDashboardIO,
  OrganisationAvatar,
  OrganisationEditBasic,
  OrganisationEditBranding,
  OrganisationEditLocations,
  OrganisationEditDescription,
  OrganisationEditTeam,
  OrganisationEditInputs,
  OrganisationEditOutputs,
  OrganisationEditLinks,
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
