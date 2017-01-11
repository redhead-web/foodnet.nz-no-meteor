import template from './organisationEditDescription.html';
import controller from './organisationEditDescription.controller';
import './organisationEditDescription.scss';

const organisationEditDescriptionComponent = {
  restrict: 'E',
  bindings: {
    organisation: '=',
  },
  template,
  controller,
};

export default organisationEditDescriptionComponent;
