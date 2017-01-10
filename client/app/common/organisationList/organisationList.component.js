import template from './organisationList.html';
import controller from './organisationList.controller';
import './organisationList.scss';

const organisationListComponent = {
  restrict: 'E',
  bindings: {
    organisations: '<',
    searchFilter: '<',
    limitTo: '<',
  },
  template,
  controller,
};

export default organisationListComponent;
