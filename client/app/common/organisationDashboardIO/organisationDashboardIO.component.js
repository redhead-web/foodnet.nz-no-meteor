import template from './organisationDashboardIO.html';
import controller from './organisationDashboardIO.controller';
import './organisationDashboardIO.scss';

const organisationDashboardIOComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    inputs: '<',
    outputs: '<',
  },
  template,
  controller,
};

export default organisationDashboardIOComponent;
