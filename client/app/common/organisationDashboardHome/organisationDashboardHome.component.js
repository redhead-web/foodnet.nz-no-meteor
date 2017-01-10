import template from './organisationDashboardHome.html';
import controller from './organisationDashboardHome.controller';
import './organisationDashboardHome.scss';

const organisationDashboardHomeComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationDashboardHomeComponent;
