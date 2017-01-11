import template from './organisationListSmall.html';
import controller from './organisationListSmall.controller';
import './organisationListSmall.scss';

const organisationListSmallComponent = {
  restrict: 'E',
  bindings: {
    organisations: '<',
    hideHeader: '<',
    pageOwned: '<',
  },
  template,
  controller,
};

export default organisationListSmallComponent;
