import template from './organisationSummary.html';
import controller from './organisationSummary.controller';
import './organisationSummary.scss';

const organisationSummaryComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationSummaryComponent;
