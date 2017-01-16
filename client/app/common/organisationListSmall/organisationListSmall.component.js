import template from './organisationListSmall.html';
import controller from './organisationListSmall.controller';
import './organisationListSmall.scss';

const organisationListSmallComponent = {
  restrict: 'E',
  bindings: {
    onModify: '&',
    organisations: '<',
    hideHeader: '<',
    pageOwned: '<',
    searchFilter: '<',
    buttonType: '@',
  },
  template,
  controller,
};

export default organisationListSmallComponent;
