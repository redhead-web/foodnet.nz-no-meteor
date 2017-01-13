import template from './organisationEditDescription.html';
import controller from './organisationEditDescription.controller';
import './organisationEditDescription.scss';

const organisationEditDescriptionComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    modifyOrganisation: '&',
  },
  template,
  controller,
};

export default organisationEditDescriptionComponent;
