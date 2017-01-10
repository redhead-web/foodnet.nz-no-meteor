import template from './userAssociations.html';
import controller from './userAssociations.controller';
import './userAssociations.scss';

const userAssociationsComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    organisationsSummary: '<',
  },
  template,
  controller,
};

export default userAssociationsComponent;
