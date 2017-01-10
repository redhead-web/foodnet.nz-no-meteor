import template from './organisationDashboardInfo.html';
import controller from './organisationDashboardInfo.controller';
import './organisationDashboardInfo.scss';

const organisationDashboardInfoComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationDashboardInfoComponent;
